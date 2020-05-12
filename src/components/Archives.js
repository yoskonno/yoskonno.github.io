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
          <ul>
            {listOfMonths.map((monthWithYear) => {
              const year = monthWithYear.slice(0, 4)
              const month = monthWithYear.slice(5, 7)
              const monthWithYearInJp = `${year}年${month}月`
              return (
                <li>
                  <Link to={`/archives/${month}`}>
                    {monthWithYearInJp}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
    )}}
  />
)

export default Archives
