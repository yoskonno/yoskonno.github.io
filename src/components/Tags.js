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
        <ul>
          {allTags.map(({node: tag}) => {
            return (
              <li key={tag}>
                <Link to={`/tags/${decodeURIComponent(tag.slug)}/`}>
                  {decodeURIComponent(tag.slug)} count: {tag.count}
                </Link>
              </li>
            )
          })}
        </ul>
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
