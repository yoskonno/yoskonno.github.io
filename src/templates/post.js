import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import hljs from 'highlight.js'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import 'highlight.js/styles/railscasts.css'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    document.querySelectorAll("pre").forEach(block => {
      hljs.highlightBlock(block)
    })
  }

  render() {
    const {
      content,
      categories,
      tags,
      title,
      date,
      author,
      eyeCatchImageUrl
    } = this.props

    // for code highlighting
    const replace = "brush: ([ a-z]*);";
    const re = new RegExp(replace,"g");
    const replacedContent = content.replace(re, "language-$1 hljs");

    return (
      <div className="post">
        <section className="section">
          {eyeCatchImageUrl !== null && (
            <div className="post__top-image-wrapper">
              <img src={eyeCatchImageUrl} alt="" className="post__top-image" />
            </div>
          )}
          <h1 className="post__title">
            {title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: replacedContent }} />
          <div style={{ marginTop: `4rem` }}>
            <p>
              {`${date} - posted by `}
              <Link to={`/author/${author.slug}`}>{author.name}</Link>
            </p>
            {categories && categories.length ? (
              <div>
                <h4>Categories</h4>
                <ul className="taglist">
                  {categories.map(category => (
                    <li key={`${category.slug}cat`}>
                      <Link to={`/categories/${category.slug}/`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {tags && tags.length ? (
              <div>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={`${tag.slug}tag`}>
                      <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    )
  }
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  let eyeCatchImageUrl = null
  try {
    eyeCatchImageUrl = post.featured_media.media_details.sizes.medium_large.source_url
  } catch(error) {
    console.log(`no media_details with: ${post.title}`)
    console.log(error)
    try {
      eyeCatchImageUrl = post.featured_media.source_url
    } catch(error2) {
      console.log(`no featured_media with: ${post.title}`)
      console.log(error2)
    }
  }

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        eyeCatchImageUrl={eyeCatchImageUrl}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      dateObject: date
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
      featured_media {
        media_details {
          sizes {
            large {
              source_url
              height
              width
            }
            medium_large {
              source_url
              height
              width
            }
          }
        }
        source_url
      }
    }
  }
`
