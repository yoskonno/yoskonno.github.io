/* eslint-disable */
import React from 'react';
import Pagination from '../components/Pagination';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const pageContext = {
    previousPagePath: '/foo',
    nextPagePath: '/bar',
    humanPageNumber: 15,
    numberOfPages: 50,
  }
  const component = renderer.create(
    <Pagination pageContext={pageContext} />
  )
});