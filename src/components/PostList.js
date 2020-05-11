import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          <div className="post-list">
            {posts.map(({ node: post }) => {
              const date = new Date(post.dateObject)
              const pathFromDate = `/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${decodeURIComponent(post.slug)}`
              return (
                <div
                  className="post-list__item"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <img src={post.featured_media.localFile.childImageSharp.resize.src} alt="" />
                  <p>
                    <Link className="has-text-primary" to={pathFromDate}>
                      {post.title}
                    </Link>
                    <span> &bull; </span>
                    <small>
                      {post.date} - posted by{' '}
                      <Link to={`/author/${post.author.slug}`}>
                        {post.author.name}
                      </Link>
                    </small>
                  </p>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                      }}
                    />
                    {/*
                    <img src={post.featured_media.source_url} />
                    */}
                    <Link className="button is-small" to={pathFromDate}>
                      Keep Reading →
                    </Link>
                  </div>
                </div>
                
              )}
            )}
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    dateObject: date
    date(formatString: "MMMM DD, YYYY")
    slug
    featured_media {
      source_url
      localFile {
        childImageSharp {
          resize {
            src
          }
        }
      }
    }
  }
`
