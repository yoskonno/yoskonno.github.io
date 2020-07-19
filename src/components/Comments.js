import React from 'react'
import CommentForm from './CommentForm'
import CommentElement from './CommentElement'
import { getFormattedDateString } from '../lib/helper/TimeHelper'
import createTree from '../lib/helper/CommentHelper'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    const start = Date.now()
    const blogUrl = 'https://test.super-fast.net'
    const { wordpressId } = this.props
    //fetch(`${blogUrl}/wp-json/wp/v2/comments?post=${wordpressId}`)
    fetch(`${blogUrl}/wp-json/wp/v2/comments?post=13`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            comments: result
          })
        },
        (error) => {
          this.setState({
            error
          });
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
