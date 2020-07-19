import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Widget from './Widget'

const Tags = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressTag(sort: {fields: count, order: DESC}, filter: {count: {gt: 1}}) {
          edges {
            node {
              id
              count
              name
              slug
            }
          }
        }
      }
    `}
    render={data => {
      const allTags = data.allWordpressTag.edges
      return (
        <div className="tag__container">
          {allTags.map(({node: tag}) => {
            return (
              <div key={tag.slug} className="tag__item">
                <Link to={`/tags/${decodeURIComponent(tag.slug)}/`}>
                  {`${decodeURIComponent(tag.slug)} (${tag.count})`}
                </Link>
              </div>
            )
          })}
        </div>
      )
    }}
  />
)

const TagsWidget = () => {
  return (
    <Widget title="タグ">
      <Tags />
    </Widget>
  )
}

export default TagsWidget
