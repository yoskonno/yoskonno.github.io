import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const MonthlyArchive = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const { month, year } = pageContext
  const title = `${year}年${month}月の記事一覧`

  return (
    <Layout>
      <Helmet title={`${month} | ${siteTitle}`} />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default MonthlyArchive

export const pageQuery = graphql`
  query MonthlyArchivePage($dateFrom: Date!, $dateTo: Date!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: {date: {gte: $dateFrom, lt: $dateTo}}) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
