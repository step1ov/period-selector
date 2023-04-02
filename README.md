# Period Selector

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

Period selector component based on Ant Design 5 and dayjs.

![Alt text](https://raw.githubusercontent.com/step1ov/period-selector/screenshots/screenshots/period-selector.png "Optional Title")

Provides such period options: today, yesterday, week, month, quarter, year, date selection, date range.

[**Live Demo**](https://step1ov.github.io/period-selector/)

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

[npm-url]: https://www.npmjs.com/package/@antd-extensions/period-selector
[npm-image]: https://img.shields.io/npm/v/@antd-extensions/period-selector
[github-license]: https://img.shields.io/github/license/step1ov/period-selector
[github-license-url]: https://github.com/step1ov/period-selector/blob/master/LICENSE
[github-build]: https://github.com/step1ov/period-selector/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/step1ov/period-selector/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/@antd-extensions/period-selector
