import moment from 'moment-timezone'

export const getPathFromDate = (date) => {
  const jstMoment = moment.tz(date, 'Asia/Tokyo')

  const pathFromDate = `${jstMoment.year()}/${String(jstMoment.month() + 1).padStart(2, '0')}/${String(jstMoment.date()).padStart(2, '0')}`
  return pathFromDate
}

export const getYearAndMonthString = (date) => {
  const jstMoment = moment.tz(date, 'Asia/Tokyo')

  const yearAndMonthString = `${jstMoment.year()}/${String(jstMoment.month() + 1).padStart(2, '0')}`
  return yearAndMonthString
}

