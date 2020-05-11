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
              let thumbnailSrc = "" // TODO: default img

              let ratio = 0

              try {
                thumbnailSrc = post.featured_media.localFile.childImageSharp.resize.src

                const { height, width } = post.featured_media.localFile.childImageSharp.resize
                ratio = width / height
              } catch(error) {
                console.log(error)
              }

              const backgroundImageStyle = {
                backgroundImage: `url(${thumbnailSrc})`,
                backgroundSize: ratio > 2 ? 'contain' : 'cover'
              }

              return (
                <div
                  className="post-list__item"
                  key={post.id}
                >
                  <div className="post-list__thumbnail" style={backgroundImageStyle} />
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
                    <h5>ratio: {ratio}</h5>
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
            height
            width
          }
        }
      }
    }
  }
`
