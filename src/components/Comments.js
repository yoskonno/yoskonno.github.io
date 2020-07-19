import React from 'react'
import { getFormattedDateString } from '../lib/helper/TimeHelper'
import createTree from '../lib/helper/CommentHelper'

const CommentElement = (props) => {
  const { comment } = props
  return (
    <div key={comment.id} className="comment__item">
      <div className="comment__item-upper">
        <div>{`${comment.author_name}さん`}</div>
        <div>{getFormattedDateString(comment.date)}</div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: comment.content.rendered
        }}
      />
      <div className="comment__child-container">
        { comment.children.length > 0 && 
        comment.children.map((childComment) => {
          return(
            <CommentElement comment={childComment} key={childComment.id} />
          )
        })}
      </div>
    </div>
  )
}

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
