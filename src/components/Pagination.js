import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext

  const threePathsBelow = getThreePathsBelow(humanPageNumber, numberOfPages)
  const threePathsAbove = getThreePathsAbove(humanPageNumber, numberOfPages)

  return (
    <nav className="pagination" role="navigation">
      {previousPagePath && (
        <div className="pagination__button-large">
          <Link to={previousPagePath} rel="prev">
            Previous
          </Link>
        </div>
      )}
      {threePathsBelow.reverse().map((path) => {
        return (
          <div className="pagination__button-number">
            <a href={path.path}>{path.number}</a>
          </div>
        )
      })}
      <div className="pagination__button-number pagination__button-number--current">
        {humanPageNumber}
      </div>
      {threePathsAbove.map((path) => {
        return (
          <div className="pagination__button-number">
            <a href={path.path}>{path.number}</a>
          </div>
        )
      })}
      {nextPagePath && (
        <div className="pagination__button-large">
          <Link to={nextPagePath} rel="next">
            Next
          </Link>
        </div>
      )}
    </nav>
  )
}

const getThreePathsBelow = (humanPageNumber, numberOfPages) => {
  const threePathsBelow = []
  console.log(`threePathsBelow: humanPageNumber: ${humanPageNumber}`)
  for (let i = humanPageNumber - 1; i >= humanPageNumber - 3 ; i-- ) {
    if (i > 0) {
      threePathsBelow.push({
        number: i,
        path: `/page/${i}`,
      })
    }
  }
  return threePathsBelow
}

const getThreePathsAbove = (humanPageNumber, numberOfPages) => {
  const threePathsAbove = []
  console.log(`threePathsAbove: humanPageNumber: ${humanPageNumber}`)
  for (let i = humanPageNumber + 1; i <= humanPageNumber + 3 ; i++ ) {
    if (i <= numberOfPages) {
      threePathsAbove.push({
        number: i,
        path: `/page/${i}`,
      })
    }
  }
  return threePathsAbove
}

export default Pagination
