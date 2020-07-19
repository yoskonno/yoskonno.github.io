import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import hljs from 'highlight.js'
import { graphql, Link } from 'gatsby'
import axios from 'axios'
import Layout from '../components/Layout'
import NextPreviousPost from '../components/NextPreviousPost'
import { BannerInPost } from '../components/Banner'
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'
import 'highlight.js/styles/railscasts.css'

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments: [],
      isLoaded: false,
      name: 'foo san',
      email: '',
      body: ''
    };
  }
  
  componentDidMount() {
    document.querySelectorAll("pre").forEach(block => {
      hljs.highlightBlock(block)
    })
  }

  handleChange(event) {
    console.log('@@@ handle chagne')
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, body } = this.state

    const formData = new FormData;
    formData.append('post', '13')
    formData.append('author_name', name);
    formData.append('author_email', email);
    formData.append('content', body);

    console.log('making axios POST !!!')

    axios.post(`https://test.super-fast.net/wp-json/wp/v2/comments`, formData)
      .then(res => {
        console.log('axios POST response !!!')
        console.log(res);
        console.log(res.data);
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
      eyeCatchImageUrl,
      pageContext,
      wordpressId,
    } = this.props

    // for code highlighting
    const replace = "brush: ([ a-z]*);";
    const re = new RegExp(replace,"g");
    let replacedContent = content.replace(re, "language-$1 hljs")

    // for removing iframe compromising...
    const replaceIframe = "<iframe(.*?)/iframe>"
    const reIframe = new RegExp(replaceIframe, "g");
    replacedContent = replacedContent.replace(reIframe, '')

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
          <p className="post__date-and-author">
            {`${date} - posted by `}
            <Link to={`/author/${author.slug}`}>{author.name}</Link>
          </p>
          <div dangerouslySetInnerHTML={{ __html: replacedContent }} />
          <p className="post__date-and-author">
            {`${date} - posted by `}
            <Link to={`/author/${author.slug}`}>{author.name}</Link>
          </p>
          <div style={{ marginTop: `4rem` }}>
            {/* commenting out categories */}
            {false && categories && categories.length ? (
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
                <h3>Tags</h3>
                <div className="tag__container">
                  {tags.map(tag => (
                    <div key={`${tag.slug}tag`} className="tag__item">
                      <Link to={`/tags/${tag.slug}/`} className="tag__link">{tag.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
        <section className="section">
          <NextPreviousPost
            pageContext={pageContext}
          />
        </section>
        <section className="section">
          <BannerInPost isSmall={false} />
        </section>
        <section className="section">
          <Comments wordpressId={wordpressId} />
        </section>
        <section className="section">
          <CommentForm wordpressId={wordpressId} />
        </section>
      </div>
    )
  }
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = (props) => {
  const { data, pageContext } = props
  const { wordpressPost: post } = data

  console.log('pageContext @post.js: ')
  console.log(pageContext)

  const replace = "<p>(.*)</p>"
  const re = new RegExp(replace,"g");
  const excerpt = post.excerpt.replace(re, "$1").replace('[&hellip;]', '...')

  let eyeCatchImageUrl = null
  try {
    eyeCatchImageUrl = post.featured_media.media_details.sizes.medium_large.source_url
  } catch(error) {
    console.log(`no media_details with: ${post.title}`)
    try {
      eyeCatchImageUrl = post.featured_media.source_url
    } catch(error2) {
      console.log(`no featured_media with: ${post.title}`)
    }
  }

  return (
    <Layout>
      <Helmet title={`${post.title} – もばらぶエンジニアブログ`}>
        <meta name="description" content={excerpt} />
      </Helmet>
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        eyeCatchImageUrl={eyeCatchImageUrl}
        pageContext={pageContext}
        wordpressId={post.wordpress_id}
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
      excerpt
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
      wordpress_id
    }
  }
`
