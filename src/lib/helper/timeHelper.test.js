import { sum, getDateToday } from './TimeHelper'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

test('get 27 as today\'s date', () => {
  expect(getDateToday()).toBe(27)
})