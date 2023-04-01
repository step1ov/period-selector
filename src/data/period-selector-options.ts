import { CheckboxOptionType } from 'antd/es/checkbox/Group'
import locale from '../locales/en_US'

const periodSelectorOptions: CheckboxOptionType[] = [
  { label: locale.today, value: 'today' },
  { label: locale.yesterday, value: 'yesterday' },
  { label: locale.week, value: 'week' },
  { label: locale.month, value: 'month' },
  { label: locale.quarter, value: 'quarter' },
  { label: locale.year, value: 'year' },
  { label: locale.date, value: 'date' },
  { label: locale.range, value: 'range' },
]

export default periodSelectorOptions
