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
  previousPagePath: '/foo',
  nextPagePath: '/bar',
  humanPageNumber: 15,
  numberOfPages: 50,
}
const wrapper = shallow(<Pagination pageContext={pageContext} />)

test('renders without error', () => {
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(0)
})

test('numbersBelow is 12, 13, 14', () => {
  const numbersBelow = wrapper.instance().numbersBelow
  expect(numbersBelow).toStrictEqual([12, 13, 14])
})

test('numbersAbove is 16, 17, 18', () => {
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

// show hide left dots

// show hide right dots

const pageContext2 = {
  previousPagePath: '/foo',
  nextPagePath: '/bar',
  humanPageNumber: 3,
  numberOfPages: 50,
}
const wrapper2 = shallow(<Pagination pageContext={pageContext2} />)

test('numbersBelow first is 1', () => {
  const numbersBelow = wrapper2.instance().numbersBelow
  expect(numbersBelow[0]).toStrictEqual(1)
})

test('pathsBelow is /', () => {
  const pathsBelow = wrapper2.instance().pathsBelow
  expect(pathsBelow[0]).toStrictEqual('/')
})

const pageContext3 = {
  previousPagePath: '/foo',
  nextPagePath: '/bar',
  humanPageNumber: 48,
  numberOfPages: 50,
}
const wrapper3 = shallow(<Pagination pageContext={pageContext3} />)

test('numbersAbove is 49 50', () => {
  const numbersAbove = wrapper3.instance().numbersAbove
  expect(numbersAbove).toStrictEqual([49, 50])
})
