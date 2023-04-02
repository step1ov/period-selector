import React, { useState } from 'react'
import { Typography } from 'antd'
import PeriodSelector, { PeriodSelectorDefault } from '@antd-extensions/period-selector'
import { PeriodSelectorValue } from '@antd-extensions/period-selector/dist/esm/components'

const { Paragraph } = Typography

const BasicUsageExample = () => {
  const [period, setPeriod] = useState<PeriodSelectorValue>(PeriodSelectorDefault)

  return (
    <>
      <h3>Basic Usage Example</h3>

      <PeriodSelector value={period} onChange={setPeriod} />

      <p>Value:</p>
      <Paragraph>
        <pre>{JSON.stringify(period, null, '\t')}</pre>
      </Paragraph>
    </>
  )
}

export default BasicUsageExample
