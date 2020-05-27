import { getUtcDate, getJstDate } from './TimeHelper'

let normalTime = new Date('2020-03-10T13:48:00.000Z') 
let almostMidnightTime = new Date('2020-03-10T23:48:00.000Z')

// normal date

test('get normalTime date as 10 in JST', () => {
  expect(getJstDate(normalTime).dates()).toBe(10)
})

test('get almostMidnightTime date as 11 in JST', () => {
  expect(getJstDate(almostMidnightTime)).toBe(11)
})

// end of month

normalTime = new Date('2020-03-31T13:48:00.000Z') 
almostMidnightTime = new Date('2020-03-31T23:48:00.000Z')

test('get normalTime date as 31 in JST', () => {
  expect(getJstDate(normalTime).dates()).toBe(31)
})

test('get almostMidnightTime date as 1 in JST', () => {
  expect(getJstDate(almostMidnightTime).dates()).toBe(1)
})

test('get normalTime month as 3 in JST', () => {
  expect(getJstDate(normalTime).months()).toBe(3)
})

test('get almostMidnightTime month as 4 in JST', () => {
  expect(getJstDate(almostMidnightTime).months()).toBe(4)
})

/*
test('test moment', () => {
  var jun = moment("2014-06-01T12:00:00Z");
  console.log('jun:')
  console.log(jun)
  const almostMidnightMoment = moment(almostMidnight)
  console.log(almostMidnightMoment)
  console.log(moment('2020-03-10T23:48:00.000Z'))

  const almostMidnightMomentTokyo = moment.tz(almostMidnightMoment, 'Asia/Tokyo')
  const almostMidnightMomentNewYork = moment.tz(almostMidnightMoment, 'America/New_York')
  console.log(almostMidnightMomentTokyo)
  console.log(almostMidnightMomentNewYork)

  console.log(almostMidnightMomentTokyo.dates())
  console.log(almostMidnightMomentNewYork.dates())

})*/
