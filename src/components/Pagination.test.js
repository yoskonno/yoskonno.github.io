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

test('threeNumbersBelow is 12, 13, 14', () => {
  const threeNumbersBelow = wrapper.instance().threeNumbersBelow
  expect(threeNumbersBelow).toStrictEqual([12, 13, 14])
})

test('threeNumbersAbove is 16, 17, 18', () => {
  const threeNumbersAbove = wrapper.instance().threeNumbersAbove
  expect(threeNumbersAbove).toStrictEqual([16, 17, 18])
})

const pageContext2 = {
  previousPagePath: '/foo',
  nextPagePath: '/bar',
  humanPageNumber: 3,
  numberOfPages: 50,
}
const wrapper2 = shallow(<Pagination pageContext={pageContext2} />)

test('threeNumbersBelow first is 1', () => {
  const threeNumbersBelow = wrapper2.instance().threeNumbersBelow
  expect(threeNumbersBelow[0]).toStrictEqual(1)
})

test('threePathsBelow is /', () => {
  const threePathsBelow = wrapper2.instance().threePathsBelow
  expect(threePathsBelow[0]).toStrictEqual('/')
})

const pageContext3 = {
  previousPagePath: '/foo',
  nextPagePath: '/bar',
  humanPageNumber: 48,
  numberOfPages: 50,
}
const wrapper3 = shallow(<Pagination pageContext={pageContext3} />)

test('threeNumbersAbove is 49 50', () => {
  const threeNumbersAbove = wrapper3.instance().threeNumbersAbove
  expect(threeNumbersAbove).toStrictEqual([49, 50])
})
