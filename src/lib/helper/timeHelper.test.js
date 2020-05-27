import { getJstMoment } from './TimeHelper'

let normalTime = new Date('2020-03-10T13:48:00.000Z') 
let almostMidnightTime = new Date('2020-03-10T23:48:00.000Z')

// normal date

test('get normalTime date as 10 in JST', () => {
  expect(getJstMoment(normalTime).date()).toBe(10)
})

test('get almostMidnightTime date as 11 in JST', () => {
  expect(getJstMoment(almostMidnightTime).date()).toBe(11)
})

// end of month

const normalTimeEndOfMonth = new Date('2020-03-31T13:48:00.000Z') 
const almostMidnightTimeEndOfMonth = new Date('2020-03-31T23:48:00.000Z')

test('get normalTime date as 31 in JST', () => {
  expect(getJstMoment(normalTimeEndOfMonth).date()).toBe(31)
})

test('get almostMidnightTime date as 1 in JST', () => {
  expect(getJstMoment(almostMidnightTimeEndOfMonth).date()).toBe(1)
})

test('get normalTime month as 2 in JST', () => {
  expect(getJstMoment(normalTimeEndOfMonth).month()).toBe(2)
})

test('get almostMidnightTime month as 3 in JST', () => {
  expect(getJstMoment(almostMidnightTimeEndOfMonth).month()).toBe(3)
})
