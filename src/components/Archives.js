import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import _ from 'lodash'

const Archives = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
              date
            }
          }
        }
      }
    `}
    render={data => {
      // TODO: duplicate code lines with gatsby-node.js
      const getOnlyPublished = edges =>
        _.filter(edges, ({ node }) => node.status === 'publish')
      const listOfMonths = []
      const allPosts = data.allWordpressPost.edges
      const posts =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPosts)
          : allPosts

      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        const date = new Date(post.date)

        // create list of months
        const yearAndMonth = `${String(date.getFullYear()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`
        if (!listOfMonths.includes(yearAndMonth)) {
          listOfMonths.push(yearAndMonth)
        }
      })
      return (
        <div>
          <h4>Archives</h4>
          <p>{listOfMonths}</p>
        </div>
    )}}
  />
)

export default Archives
