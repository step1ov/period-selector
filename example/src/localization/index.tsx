import React, { useState } from 'react'
import { Typography } from 'antd'
import PeriodSelector, { PeriodSelectorDefault } from '@antd-extensions/period-selector'
import 'dayjs/locale/ru'
import pickerLocale from 'antd/es/date-picker/locale/ru_RU'
import locale from '@antd-extensions/period-selector/dist/esm/locales/ru_RU'
import { PeriodSelectorValue } from '@antd-extensions/period-selector/dist/esm/components'

const { Paragraph } = Typography

const LocalizationExample = () => {
  const [period, setPeriod] = useState<PeriodSelectorValue>(PeriodSelectorDefault)

  return (
    <>
      <h3>Localization Example</h3>

      <PeriodSelector
        value={period}
        onChange={setPeriod}
        locale={locale}
        pickerLocale={pickerLocale}
        pickerFormat={'DD.MM.YYYY'}
      />

      <p>Value:</p>
      <Paragraph>
        <pre>{JSON.stringify(period, null, '\t')}</pre>
      </Paragraph>
    </>
  )
}

export default LocalizationExample
