# Period Selector

Dates period selector component based on antd and dayjs.

## Installation

```bash
npm install @antd-extensions/period-selector
```

or

```bash
yarn add @antd-extensions/period-selector
```

Also, you need antd and dayjs to be installed in you project

```bash
yarn add antd dayjs
```

Component dependencies:

```json
{
  "peerDependencies": {
    "react": ">=16",
    "antd": ">=5",
    "dayjs": ">=1"
  }
}
```

## Usage

### Basic usage:

```js
import React, {useState} from 'react';
import PeriodSelector, {PeriodSelectorDefault} from "@antd-extensions/period-selector";

const BasicUsageExample = () => {
  const [period, setPeriod] = useState<PeriodSelectorValue>(PeriodSelectorDefault);

  return (
      <PeriodSelector
        value={period}
        onChange={setPeriod}
      />
  )
}
```

### Localized usage:

```js
import React, {useState} from 'react';
import PeriodSelector, {PeriodSelectorDefault} from '@antd-extensions/period-selector';
import 'dayjs/locale/ru';
import pickerLocale from 'antd/es/date-picker/locale/ru_RU';
import locale from '@antd-extensions/locales/ru_RU';

const LocalizationExample = () => {
  const [period, setPeriod] = useState<PeriodSelectorValue>(PeriodSelectorDefault);

  return (
    <PeriodSelector
      value={period}
      onChange={setPeriod}
      locale={locale}
      pickerLocale={pickerLocale}
      pickerFormat={'DD.MM.YYYY'}
    />
  )
}

export default LocalizationExample;
```
