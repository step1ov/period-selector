import { DatePicker, DatePickerProps, Radio, RadioChangeEvent, Space } from 'antd'
import React from 'react'
import dayjs from 'dayjs'
import { RangePickerProps } from 'antd/es/date-picker'
import normalizeDate from '../utils/normalize-date'
import { RadioGroupProps } from 'antd/es/radio/interface'
import GetPeriodSelectorPeriod from '../utils/get-period-selector-range'
import periodSelectorOptions from '../data/period-selector-options'
import { PickerLocale } from 'antd/es/date-picker/generatePicker'
import { SpaceProps } from 'antd/es/space'
import { CheckboxOptionType } from 'antd/es/checkbox/Group'

export type PeriodSelectorValue = {
  type: 'today' | 'yesterday' | 'week' | 'month' | 'quarter' | 'year' | 'date' | 'range'
  start?: Date
  finish?: Date
}

export type PeriodSelectorVisibleOptions = {
  today?: boolean | undefined
  yesterday?: boolean | undefined
  week?: boolean | undefined
  month?: boolean | undefined
  quarter?: boolean | undefined
  year?: boolean | undefined
  date?: boolean | undefined
  range?: boolean | undefined
}

export type PeriodSelectorLocale = {
  today: string
  yesterday: string
  week: string
  month: string
  quarter: string
  year: string
  date: string
  range: string
}

export interface PeriodSelectorProps {
  value?: PeriodSelectorValue
  onChange?: (value: PeriodSelectorValue) => void
  visibleOptions?: PeriodSelectorVisibleOptions
  radioGroupProps?: RadioGroupProps
  datePickerProps?: DatePickerProps
  rangePickerProps?: RangePickerProps
  spaceProps?: SpaceProps
  locale?: PeriodSelectorLocale
  pickerLocale?: PickerLocale
  pickerFormat?: string
}

const { RangePicker } = DatePicker

const PeriodSelector = ({
  value,
  onChange,
  visibleOptions,
  radioGroupProps,
  datePickerProps,
  rangePickerProps,
  spaceProps,
  locale,
  pickerLocale,
  pickerFormat,
}: PeriodSelectorProps) => {
  const onTypeChange = ({ target }: RadioChangeEvent) => {
    const result: PeriodSelectorValue = GetPeriodSelectorPeriod({ type: target.value })
    onChange && onChange(result)
  }

  const onDateChange: DatePickerProps['onChange'] = (date: dayjs.Dayjs | null) => {
    const result: PeriodSelectorValue = GetPeriodSelectorPeriod({
      type: 'date',
      start: date ? normalizeDate(date.toDate()) : normalizeDate(),
    })
    onChange && onChange(result)
  }

  const onPeriodChange = (data: DatePickerProps['value'] | RangePickerProps['value']) => {
    let result: PeriodSelectorValue
    if (Array.isArray(data)) {
      result = GetPeriodSelectorPeriod({
        type: 'range',
        start: data[0] ? normalizeDate(data[0].toDate()) : normalizeDate(),
        finish: data[1] ? normalizeDate(data[1].toDate()) : normalizeDate(),
      })
    } else {
      result = GetPeriodSelectorPeriod({
        type: 'range',
        start: data ? normalizeDate(data.toDate()) : normalizeDate(),
      })
    }
    onChange && onChange(result)
  }

  let options: CheckboxOptionType[] = visibleOptions
    ? periodSelectorOptions.filter((x) => visibleOptions[x.value as keyof PeriodSelectorVisibleOptions])
    : periodSelectorOptions

  if (locale) {
    options = options.map((x: CheckboxOptionType) => {
      const option = { ...x }
      if (locale[x.value as keyof PeriodSelectorLocale]) {
        option.label = locale[x.value as keyof PeriodSelectorLocale]
      }
      return option
    })
  }

  return (
    <Space {...spaceProps}>
      <Radio.Group
        {...{ optionType: 'button', buttonStyle: 'solid', ...radioGroupProps }}
        options={options}
        onChange={onTypeChange}
        value={value?.type || 'today'}
      />
      {value?.type === 'date' && (
        <DatePicker
          {...datePickerProps}
          value={dayjs(value?.start) || dayjs()}
          onChange={onDateChange}
          allowClear={false}
          locale={pickerLocale}
          format={pickerFormat}
        />
      )}
      {value?.type === 'range' && (
        <RangePicker
          {...rangePickerProps}
          value={[dayjs(value?.start) || dayjs(), dayjs(value?.finish) || dayjs()]}
          onChange={onPeriodChange}
          allowClear={false}
          locale={pickerLocale}
          format={pickerFormat}
        />
      )}
    </Space>
  )
}

export const PeriodSelectorDefault: PeriodSelectorValue = {
  type: 'today',
  start: normalizeDate(),
}

export default PeriodSelector
