import moment from 'moment-timezone'

export const getJstMoment = (date) => {
  let momentJst = moment.tz(date, 'Asia/Tokyo')
  return momentJst
}


