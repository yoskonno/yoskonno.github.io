import React from 'react'
import CommentForm from './CommentForm'
import { getFormattedDateString } from '../lib/helper/TimeHelper'

class CommentElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const { comment } = this.props

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
        <button type="button" onClick={this.handleClick}>返信する</button>
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
}

export default CommentElement
