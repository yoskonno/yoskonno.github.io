import { getZDate, getJstDate } from './TimeHelper'

const now = new Date()
const almostMidnight = new Date('2020-03-10T23:48:00.000Z')

test('get 27 as today\'s date', () => {
  expect(getZdate()).toBe(27)
})

test('get 27 as today\'s date', () => {
  expect(getZdate()).toBe(27)
})
