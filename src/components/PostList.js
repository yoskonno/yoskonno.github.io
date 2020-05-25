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
              const pathFromDate = `/${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${decodeURIComponent(post.slug)}`
              let thumbnailSrc = "" // TODO: default img

              let ratio = 0

              // sometimes localFile is null
              // and only when localFile is null,
              // medium sized image exists... don't know why
              try {
                thumbnailSrc = post.featured_media.localFile.childImageSharp.resize.src

                const { height, width } = post.featured_media.localFile.childImageSharp.resize
                ratio = width / height
              } catch(error) {
                console.log(error)

                try {
                  thumbnailSrc = post.featured_media.media_details.sizes.medium.source_url

                  const { height, width } = post.featured_media.media_details.sizes.medium
                  ratio = width / height
                } catch(errorNext) {
                  console.log(errorNext)
                }
              }

              const backgroundImageStyle = {
                backgroundImage: `url(${thumbnailSrc})`,
                backgroundSize: ratio > 2 ? 'contain' : 'cover'
              }

              return (
                <Link
                  className="post-list__item"
                  key={post.id}
                  to={pathFromDate}
                >
                  <div className="post-list__thumbnail" style={backgroundImageStyle} />
                  <h4 className="post-list__title">
                    {post.title}
                  </h4>
                  <p>
                    <small>
                      {post.date}
                    </small>
                  </p>
                  <p>
                    <small>posted by{' '}
                      <Link to={`/author/${post.author.slug}`}>
                        {post.author.name}
                      </Link>
                    </small>
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.replace(/<p class="link-more.*/, '').replace('[&hellip;]', '...'),
                    }}
                  />
                  <Link className="button is-small" to={pathFromDate}>
                    Keep Reading →
                  </Link>
                </Link>
                
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
      source_url
    }
  }
`
