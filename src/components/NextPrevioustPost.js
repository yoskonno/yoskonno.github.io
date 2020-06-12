import React from 'react'
import { Link } from 'gatsby'

const NextPreviousPost = ({ pageContext }) => {
  const {
    nextPath,
    nextTitle,
    prevPath,
    prevTitle
  } = pageContext

  return (
    <>
      <Link to={prevPath}>
        {`前の投稿: ${prevTitle}`}
      </Link>
      <Link to={nextPath}>
        {`次の投稿: ${nextTitle}`}
      </Link>
    </>
  )
}

export default NextPreviousPost
