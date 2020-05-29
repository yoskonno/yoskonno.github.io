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


const pageContext = {
  humanPageNumber: 15,
  numberOfPages: 50,
}
const wrapper = shallow(<Pagination pageContext={pageContext} />)

// case humanPageNumber/numberOfPages = 15/50

test('numbersBelow is 12, 13, 14 case 15/50', () => {
  const numbersBelow = wrapper.instance().numbersBelow
  expect(numbersBelow).toStrictEqual([12, 13, 14])
})

test('numbersAbove is 16, 17, 18 case 15/50', () => {
  const numbersAbove = wrapper.instance().numbersAbove
  expect(numbersAbove).toStrictEqual([16, 17, 18])
})

// show hide first button
test('show first button case 15/50', () => {
  const firstButton = wrapper.find("[data-test='first-button']")
  expect(firstButton.length).toBe(1)
})

// show hide last button
test('show last button case 15/50', () => {
  const lastButton = wrapper.find("[data-test='last-button']")
  expect(lastButton.length).toBe(1)
})

test('show left dots case 15/50', () => {
  const leftDots = wrapper.find("[data-test='left-dots']")
  expect(leftDots.length).toBe(1)
})

// show hide right dots

const pageContext2 = {
  humanPageNumber: 3,
  numberOfPages: 50,
}
const wrapper2 = shallow(<Pagination pageContext={pageContext2} />)

// case humanPageNumber/numberOfPages = 3/50

test('numbersBelow first is 1', () => {
  const numbersBelow = wrapper2.instance().numbersBelow
  expect(numbersBelow[0]).toStrictEqual(1)
})

const pageContext3 = {
  humanPageNumber: 48,
  numberOfPages: 50,
}
const wrapper3 = shallow(<Pagination pageContext={pageContext3} />)

test('numbersAbove is 49 50', () => {
  const numbersAbove = wrapper3.instance().numbersAbove
  expect(numbersAbove).toStrictEqual([49, 50])
})

test('show left dots case 48/50', () => {
  const leftDots = wrapper.find("[data-test='left-dots']")
  expect(leftDots.length).toBe(1)
})

const pageContext4 = {
  humanPageNumber: 1,
  numberOfPages: 50,
}
const wrapper4 = shallow(<Pagination pageContext={pageContext4} />)

// case humanPageNumber/numberOfPages = 1/50

test('hide first button case 1/50', () => {
  const firstButton = wrapper4.find("[data-test='first-button']")
  console.log(wrapper4.instance().humanPageNumber)
  expect(firstButton.length).toBe(0)
})

test('hide left dots case 1/50', () => {
  const leftDots = wrapper4.find("[data-test='left-dots']")
  expect(leftDots.length).toBe(0)
})
