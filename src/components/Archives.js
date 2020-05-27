import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import _ from 'lodash'
import { getYearAndMonthString } from '../lib/helper/TimeHelperFoo'

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
        const yearAndMonth = getYearAndMonthString(date)
        if (!listOfMonths.includes(yearAndMonth)) {
          listOfMonths.push(yearAndMonth)
        }
      })
      return (
        <div>
          <h4>アーカイブ</h4>
          <ul>
            {listOfMonths.map((monthWithYear) => {
              const year = monthWithYear.slice(0, 4)
              const month = monthWithYear.slice(5, 7)
              const monthWithYearInJp = `${year}年${month}月`
              return (
                <li key={monthWithYear}>
                  <Link to={`/archives/${monthWithYear}`}>
                    {monthWithYearInJp}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }}
  />
)

export default Archives
