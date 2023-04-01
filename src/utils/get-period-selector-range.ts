import dayjs from 'dayjs'
import normalizeDate from './normalize-date'
import { PeriodSelectorValue } from '../components'

const GetPeriodSelectorPeriod = (data: PeriodSelectorValue): PeriodSelectorValue => {
  const result: PeriodSelectorValue = {
    type: data.type,
    start: normalizeDate(),
  }
  switch (data.type) {
    case 'date':
      data.start && (result.start = normalizeDate(data.start))
      break
    case 'range':
      data.start && (result.start = normalizeDate(data.start))
      result.finish = data.finish || normalizeDate()
      if (result.start && result.finish < result.start) result.finish = normalizeDate(result.start)
      break
    case 'yesterday':
      result.start = normalizeDate(dayjs().subtract(1, 'day').toDate())
      break
    case 'week':
      result.start = normalizeDate(dayjs().subtract(1, 'week').toDate())
      result.finish = normalizeDate()
      break
    case 'month':
      result.start = normalizeDate(dayjs().subtract(1, 'month').toDate())
      result.finish = normalizeDate()
      break
    case 'quarter':
      result.start = normalizeDate(dayjs().subtract(4, 'month').toDate())
      result.finish = normalizeDate()
      break
    case 'year':
      result.start = normalizeDate(dayjs().subtract(1, 'year').toDate())
      result.finish = normalizeDate()
      break
  }
  return result
}

export default GetPeriodSelectorPeriod
