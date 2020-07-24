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
    const blogUrl = 'https://test.super-fast.net'
    //const blogUrl = 'https://stg-engineering.mobalab.net'
    const { wordpressId } = this.props
    console.log(`${blogUrl}/wp-json/wp/v2/comments?post=${wordpressId}`)
    fetch(`${blogUrl}/wp-json/wp/v2/comments?post=${wordpressId}`)
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
