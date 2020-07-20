import React from 'react'
import CommentForm from './CommentForm'
import { getFormattedDateString } from '../lib/helper/TimeHelper'

class CommentElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showReplyForm: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
      showReplyForm: !state.showReplyForm
    }));
  }

  render() {
    const { comment } = this.props
    const { showReplyForm } = this.state

    return (
      <div key={comment.id} className="comment__item">
        <div className="comment__item-upper">
          <div className="comment__name">{`${comment.author_name}さん`}</div>
          <div className="comment__date">{getFormattedDateString(comment.date)}</div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: comment.content.rendered
          }}
        />
        <button className="comment__reply-button" type="button" onClick={this.handleClick}>{showReplyForm ? '閉じる' : '返信する'}</button>
        {showReplyForm && (
          <CommentForm isReplyForm messageId={comment.id} />
        )}
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
