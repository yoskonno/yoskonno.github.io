import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext

  const numbersBelow = [
    humanPageNumber - 3,
    humanPageNumber - 2,
    humanPageNumber - 1,
  ].filter((number) => number > 0)

  const numbersAbove = [
    humanPageNumber + 1,
    humanPageNumber + 2,
    humanPageNumber + 3,
  ].filter((number) => number <= numberOfPages)

  const showFirstButton = humanPageNumber !== 1
  const showLastButton = humanPageNumber !== numberOfPages
  const showLeftDots = humanPageNumber >= 5
  const showRightDots = humanPageNumber <= numberOfPages - 4

  return (
    <div className="pagination" role="navigation">
      {showFirstButton && (
        <div
          className="pagination__item"
          data-test="first-button"
        >
          <Link to="/">
            {'<<'}
          </Link>
        </div>
      )}
      {previousPagePath && (
        <div
          className="pagination__item"
        >
          <Link to={previousPagePath} rel="prev">
            Previous
          </Link>
        </div>
      )}
      {showLeftDots && (
        <div
          className="pagination__item pagination__dots"
          data-test="left-dots"
        >
          ...
        </div>
      )}
      {numbersBelow.map((number) => {
        const path = number === 1 ? `/` : `/page/${number}`
        return (
          <div
            key={path}
            className="pagination__item"
          >
            <Link to={path} data-test='number-below'>
              {number}
            </Link>
          </div>
        )
      })}
      <div
        className="pagination__item"
      >
        {humanPageNumber}
      </div>
      {numbersAbove.map((number) => {
        const path = `/page/${number}`
        return (
          <div
            key={path}
            className="pagination__item"
          >
            <Link to={path} data-test='number-above'>
              {number}
            </Link>
          </div>
        )
      })}
      {showRightDots && (
        <div
          className="pagination__item pagination__dots"
          data-test="right-dots"
        >
          ...
        </div>
      )}
      {nextPagePath && (
        <div
          className="pagination__item"
        >
          <Link to={nextPagePath} rel="next">
            Next
          </Link>
        </div>
      )}
      {showLastButton && (
        <div
          className="pagination__item"
          data-test="last-button"
        >
          <Link to={`page/${numberOfPages}`}>
            {'>>'}
          </Link>
        </div>
      )}
    </div>
  )
}

export default Pagination
