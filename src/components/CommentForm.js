import React from 'react'
import axios from 'axios'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      body: '',
      isSending: false,
      isSent: false,
      errorMessage: null,
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ isSending: true, errorMessage: null })
    event.preventDefault();

    const { name, email, body } = this.state
    const { wordpressId, messageId } = this.props

    const formData = new FormData
    formData.append('post', wordpressId)
    formData.append('post', 13)
    formData.append('author_name', name)
    formData.append('author_email', email)
    formData.append('content', body)
    if (messageId !== undefined) {
      formData.append('parent', messageId)
    }

    const blogUrl = 'http://stg-engineering.mobalab.net'
      axios.post(`${blogUrl}/wp-json/wp/v2/comments`, formData, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .then(() => {
          this.setState({isSending: false, isSent: true})
        })
        .catch((error) => {
          let errorMessage = ''
          if (error.response.status === undefined || error.response.status === null) {
            errorMessage = 'コメントの送信に失敗しました。'
          } else if (error.response.status === 400) {
            errorMessage = '入力内容を再度ご確認ください。'
          } else {
            errorMessage = 'コメントの送信に失敗しました。'
          }
          this.setState({isSending: false, errorMessage})
      });
  }

  render() {
    const { isReplyForm } = this.props
    const { isSending, isSent, errorMessage } = this.state

    let buttonClassName = 'comment-form__button'
    if (isSending) {
      buttonClassName += ` ${buttonClassName  }--sending`
    }
    
    return(
      <div>
        {!isReplyForm && (
          <h3>コメントを残す</h3>
        )}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input className="comment-form__input" type="text" name="name" placeholder="お名前" onChange={this.handleChange} />
          <input className="comment-form__input" type="text" name="email" placeholder="メールアドレス(公開されません)" onChange={this.handleChange} />
          <textarea className="comment-form__input" name="body" cols="39" rows="4" placeholder="コメント" onChange={this.handleChange} />
          {errorMessage !== null && (
            <p className="comment-form__error-message">{errorMessage}</p>
          )}
          {isSent ? (
            <p className="comment-form__sent-message">コメントが送信されました。管理者により承認された後にコメントが表示されます。</p>
          ) : (
            <button
              className={buttonClassName}
              type="submit"
            >
              コメントを送信
            </button>
          )}
        </form>
      </div>
    )
  }
}

export default CommentForm
