import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { getPathFromDate } from '../lib/helper/TimeHelper'

export default class IndexPage extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="post-list">
            {posts.map(({ node: post }) => {
              const date = new Date(post.dateObject)
              const pathFromDate = `/${getPathFromDate(date)}/${decodeURIComponent(post.slug)}`

              let thumbnailSrc = "/img/mobalab-logo.jpg"
              let ratio = 0

              try {
                thumbnailSrc = post.featured_media.media_details.sizes.medium.source_url

                const { height, width } = post.featured_media.media_details.sizes.medium
                ratio = width / height
              } catch(error) {
                console.log(error)
              }
              const backgroundImageStyle = {
                backgroundImage: `url(${thumbnailSrc})`,
                backgroundSize: ratio > 2 ? 'contain' : 'cover'
              }

              return (
                <div className="post-list__item-wrapper">
                  <Link
                    className="post-list__item"
                    key={post.id}
                    to={pathFromDate}
                  >
                    <div className="post-list__thumbnail" style={backgroundImageStyle} />
                    <div className="post-list__main-area">
                      <h4 className="post-list__title">
                        {post.title}
                      </h4>
                      <p className="post-list__small">
                        {post.date}
                      </p>
                      <p className="post-list__small">
                        posted by
                        {' '}
                        <Link to={`/author/${post.author.slug}`}>
                          {post.author.name}
                        </Link>
                      </p>
                      <div
                        className="post-list__excerpt"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.replace(/<p class="link-more.*/, '').replace('[&hellip;]', '...'),
                        }}
                      />
                      <div className="post-list__button-area">
                        <Link
                          className="button button--small"
                          to={pathFromDate}
                        >
                          続きを読む →
                        </Link>
                      </div>
                    </div>
                  </Link>
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
      media_details {
        sizes {
          medium {
            source_url
            height
            width
          }
        }
      }
    }
  }
`
