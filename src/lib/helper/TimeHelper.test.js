/* eslint-disable */
import {
  getPathFromDate,
  getYearAndMonthString,
  getCurrentYearString,
  getFormattedDateString
} from './TimeHelper'

const normalTime = new Date('2020-03-05T13:48:00.000Z') 
const almostMidnightTime = new Date('2020-03-10T23:48:00.000Z')

test('get normalTime pathFromDate as 2020/03/05', () => {
  expect(getPathFromDate(normalTime)).toBe('2020/03/05')
})

test('get normalTime yearAndMonthString as 2020/03', () => {
  expect(getYearAndMonthString(normalTime)).toBe('2020/03')
})

test('get almostMidnightTime pathFromDate as 2020/03/11', () => {
  expect(getPathFromDate(almostMidnightTime)).toBe('2020/03/11')
})

test('get almostMidnightTime yearAndMonthString as 2020/03', () => {
  expect(getYearAndMonthString(almostMidnightTime)).toBe('2020/03')
})

// end of month
const normalTimeEndOfMonth = new Date('2020-03-31T13:48:00.000Z') 
const almostMidnightTimeEndOfMonth = new Date('2020-03-31T23:48:00.000Z')

test('get normalTimeEndOfMonth pathFromDate as 2020/03/31', () => {
  expect(getPathFromDate(normalTimeEndOfMonth)).toBe('2020/03/31')
})

test('get normalTimeEndOfMonth yearAndMonthString as 2020/03', () => {
  expect(getYearAndMonthString(normalTimeEndOfMonth)).toBe('2020/03')
})

test('get almostMidnightTimeEndOfMonth pathFromDate as 2020/04/01', () => {
  expect(getPathFromDate(almostMidnightTimeEndOfMonth)).toBe('2020/04/01')
})

test('get almostMidnightTimeEndOfMonth yearAndMonthString as 2020/04', () => {
  expect(getYearAndMonthString(almostMidnightTimeEndOfMonth)).toBe('2020/04')
})

test('get currentYear', () => {
  expect(getCurrentYearString()).toBe('2020')
})

test('get formatted date string before noon', () => {
  expect(getFormattedDateString('2020-07-14T07:18:26')).toBe('2020年7月14日 at 7:18')
})

test('get formatted date string after noon', () => {
  expect(getFormattedDateString('2020-07-14T14:18:26')).toBe('2020年7月14日 at 14:18')
})
