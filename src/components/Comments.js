import React from 'react'
import CommentElement from './CommentElement'
import createTree from '../lib/helper/CommentHelper'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    const blogUrl = 'https://stg-engineering-wp.mobalab.net'
    const { wordpressId } = this.props
    // adding timestamp in order to avoid cache
    fetch(`${blogUrl}/wp-json/wp/v2/comments?post=${wordpressId}&timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            comments: result
          })
        }
      )
  }

  render() {
    const { comments } = this.state

    if (comments.length > 0) {
      const commentTree = createTree(comments.reverse())

      return (
        <div className="comment">
          <h3>コメント</h3>
          {commentTree.map((comment) => {
            return(
              <CommentElement comment={comment} key={comment.id} />
            )
          })}
        </div>
      )
    }
    return null
  }
}

export default Comments
