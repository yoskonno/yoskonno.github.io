import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import _ from 'lodash'
import Widget from './Widget'

const RecentPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(sort: { fields: date, order: DESC }, limit: 5) {
          edges {
            node {
              title
              date
              slug
              status
            }
          }
        }
      }
    `}
    render={data => {
      // TODO: duplicate code lines with gatsby-node.js
      const getOnlyPublished = edges =>
        _.filter(edges, ({ node }) => node.status === 'publish')
      const allPosts = data.allWordpressPost.edges
      const posts =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPosts)
          : allPosts

      return (
        <ul>
          {posts.map(({ node: post }) => {
            const year = String(post.date).slice(0, 4)
            const month = String(post.date).slice(5, 7)
            const date = String(post.date).slice(8, 10)
            return (
              <li key={post.slug}>
                <Link
                  to={`/${year}/${month}/${date}/${post.slug}`}
                >
                  {post.title}
                </Link>
              </li>
            )
          })}
        </ul>
    )}}
  />
)

const RecentPostsWidget = () => {
  return (
    <Widget title="最近の投稿">
      <RecentPosts />
    </Widget>
  )
}

export default RecentPostsWidget
