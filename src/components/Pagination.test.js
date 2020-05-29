/* eslint-disable */
import React from 'react';
import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

import Pagination from './Pagination';

Enzyme.configure({ adapter: new EnzymeAdapter })

// if enable to set number of numbers, also add test?

// show hide previous button

// show hide next button

// show hide first button

// show hide last button

// show hide left dots

// show hide right dots


const setup = (humanPageNumber, numberOfPages) => {
  let pageContext = {
    humanPageNumber: humanPageNumber,
    numberOfPages: numberOfPages,
  }
  return shallow(<Pagination pageContext={pageContext} />)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

test('numbersBelow is 12, 13, 14 case 15/50', () => {
  const wrapper = setup(15, 50)
  const numbersBelow = wrapper.instance().numbersBelow
  expect(numbersBelow).toStrictEqual([12, 13, 14])
})

test('numbersAbove is 16, 17, 18 case 15/50', () => {
  const wrapper = setup(15, 50)
  const numbersAbove = wrapper.instance().numbersAbove
  expect(numbersAbove).toStrictEqual([16, 17, 18])
})

// show hide first button
test('show first button case 15/50', () => {
  const wrapper = setup(15, 50)
  const elem =findByTestAttr(wrapper, 'first-button')
  expect(elem.length).toBe(1)
})

// show hide last button
test('show last button case 15/50', () => {
  const wrapper = setup(15, 50)
  const elem = findByTestAttr(wrapper, 'last-button')
  expect(elem.length).toBe(1)
})

test('show left dots case 15/50', () => {
  const wrapper = setup(15, 50)
  const elem = findByTestAttr(wrapper, 'left-dots')
  expect(elem.length).toBe(1)
})

test('show right dots case 15/50', () => {
  const wrapper = setup(15, 50)
  const elem = findByTestAttr(wrapper, 'right-dots')
  expect(elem.length).toBe(1)
})

test('numbersBelow first is 12 case 15/50', () => {
  const wrapper = setup(15, 50)
  const numbersBelow = wrapper.instance().numbersBelow
  expect(numbersBelow[0]).toStrictEqual(12)
})

test('numbersAbove is 49 50 case 48/50', () => {
  const wrapper = setup(48, 50)
  const numbersAbove = wrapper.instance().numbersAbove
  console.log(wrapper.instance().numbersAbove)
  expect(numbersAbove).toStrictEqual([49, 50])
})

test('show left dots case 48/50', () => {
  const wrapper = setup(48, 50)
  const elem = findByTestAttr(wrapper, 'left-dots')
  expect(elem.length).toBe(1)
})

test('hide right dots case 48/50', () => {
  const wrapper = setup(48, 50)
  const elem = findByTestAttr(wrapper, 'right-dots')
  expect(elem.length).toBe(0)
})

test('numbersBelow is 1 case 2/50', () => {
  const wrapper = setup(2, 50)
  const numbersBelow = wrapper.instance().numbersBelow
  expect(numbersBelow).toStrictEqual([1])
})

test('hide first button case 1/50', () => {
  const wrapper = setup(1, 50)
  const elem = findByTestAttr(wrapper, 'first-button')
  expect(elem.length).toBe(0)
})

test('hide left dots case 1/50', () => {
  const wrapper = setup(1, 50)
  const elem = findByTestAttr(wrapper, 'left-dots')
  expect(elem.length).toBe(0)
})

test('hide first button case 1/3', () => {
  const wrapper = setup(1, 3)
  const elem = findByTestAttr(wrapper, 'first-button')
  expect(elem.length).toBe(0)
})

test('hide left dots case 1/3', () => {
  const wrapper = setup(1, 3)
  const elem = findByTestAttr(wrapper, 'left-dots')
  expect(elem.length).toBe(0)
})

test('show last button case 1/3', () => {
  const wrapper = setup(1, 3)
  const elem = findByTestAttr(wrapper, 'last-button')
  expect(elem.length).toBe(1)
})

test('hide right dots case 1/3', () => {
  const wrapper = setup(1, 3)
  const elem = findByTestAttr(wrapper, 'right-dots')
  expect(elem.length).toBe(0)
})

test('hide left dots case 2/3', () => {
  const wrapper = setup(2, 3)
  const elem = findByTestAttr(wrapper, 'left-dots')
  expect(elem.length).toBe(0)
})

test('show last button case 2/3', () => {
  const wrapper = setup(2, 3)
  const elem = findByTestAttr(wrapper, 'last-button')
  expect(elem.length).toBe(1)
})

test('hide right dots case 2/3', () => {
  const wrapper = setup(2, 3)
  const elem = findByTestAttr(wrapper, 'right-dots')
  expect(elem.length).toBe(0)
})

test('hide left dots case 3/3', () => {
  const wrapper = setup(3, 3)
  const elem = findByTestAttr(wrapper, 'left-dots')
  expect(elem.length).toBe(0)
})

test('show first button case 3/3', () => {
  const wrapper = setup(3, 3)
  const elem = findByTestAttr(wrapper, 'first-button')
  expect(elem.length).toBe(1)
})

test('hide last button case 3/3', () => {
  const wrapper = setup(3, 3)
  const elem = findByTestAttr(wrapper, 'last-button')
  expect(elem.length).toBe(0)
})

test('hide right dots case 3/3', () => {
  const wrapper = setup(3, 3)
  const elem = findByTestAttr(wrapper, 'right-dots')
  expect(elem.length).toBe(0)
})
