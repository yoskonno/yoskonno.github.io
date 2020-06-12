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
    <div className="post-link">
      <Link to={prevPath} className="post-link__left">
        <h3 className="post-link__title">← 前の投稿</h3>
        <p className="post-link__link-text">{prevTitle}</p>
      </Link>
      <Link to={nextPath} className="post-link__right">
        <h3 className="post-link__title">次の投稿 →</h3>
        <p className="post-link__link-text">{nextTitle}</p>
      </Link>
    </div>
  )
}

export default NextPreviousPost
