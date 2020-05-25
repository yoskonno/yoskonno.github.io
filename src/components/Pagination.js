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
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <Link to={previousPagePath} rel="prev">
              Previous
            </Link>
          </div>
        )}
        <p>humanPageNumber: {humanPageNumber}</p>
        <p>numberOfPages: {numberOfPages}</p>
        <p>threePathsBelow: {threePathsBelow}</p>
        <p>threePathsAbove: {threePathsAbove}</p>
        {nextPagePath && (
          <div className="navbar-item">
            <Link to={nextPagePath} rel="next">
              Next
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

const getThreePathsBelow = (humanPageNumber, numberOfPages) => {
  
}

const getThreePathsAbove = () => {
  
}

export default Pagination
