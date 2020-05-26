import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import _ from 'lodash'

const RecentPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(sort: { fields: date }, limit: 5) {
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
        <div>
          <h4>最近の投稿</h4>
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
        </div>
    )}}
  />
)

export default RecentPosts
