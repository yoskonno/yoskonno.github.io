const moment = require('moment-timezone')

const getPathFromDate = (date) => {
  const jstMoment = moment.tz(date, 'Asia/Tokyo')

  const pathFromDate = `${jstMoment.year()}/${String(jstMoment.month() + 1).padStart(2, '0')}/${String(jstMoment.date()).padStart(2, '0')}`
  return pathFromDate
}

const getYearAndMonthString = (date) => {
  const jstMoment = moment.tz(date, 'Asia/Tokyo')

  const yearAndMonthString = `${jstMoment.year()}/${String(jstMoment.month() + 1).padStart(2, '0')}`
  return yearAndMonthString
}

const getCurrentYearString = () => {
  const jstMoment = moment().tz('Asia/Tokyo')
  return String(jstMoment.year())
}

// convert "2020-07-14T07:18:26” to "2020年7月14日 at 7:18"
const getFormattedDateString = (date) => {
  const jstMoment = moment.tz(date, 'Asia/Tokyo')
  return jstMoment.format('YYYY年M月D日 [at] H:mm')
}

module.exports = {
  getPathFromDate,
  getYearAndMonthString,
  getCurrentYearString,
  getFormattedDateString,
}
