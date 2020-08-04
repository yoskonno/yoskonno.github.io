import React, { useState } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";

const CommentForm = (props) => {

  const [state, setFormState] = useState({
    name: '',
    email: '',
    body: '',
    isSending: false,
    isSent: false,
    errorMessage: null,
  })

  const handleChange = (event) => {
    setFormState({ ...state, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    setFormState({ ...state, isSending: true, errorMessage: null })
    event.preventDefault();

    const { name, email, body } = state
    const { wordpressId, messageId } = props

    const formData = new FormData
    formData.append('post', wordpressId)
    formData.append('author_name', name)
    formData.append('author_email', email)
    formData.append('content', body)
    if (messageId !== undefined) {
      formData.append('parent', messageId)
    }

    const blogUrl = 'https://stg-engineering.mobalab.net'
      axios.post(`${blogUrl}/wp-json/wp/v2/comments`, formData, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .then(() => {
          setFormState({...state, isSending: false, isSent: true, errorMessage: null})
        })
        .catch((error) => {
          // console.log(error)
          let errorMessage = ''
          if (error.response === undefined) {
            errorMessage = 'コメントの送信に失敗しました。'
          } else if (error.response.status === 400) {
            errorMessage = '入力内容を再度ご確認ください。'
          } else {
            errorMessage = 'コメントの送信に失敗しました。'
          }
          setFormState({...state, isSending: false, errorMessage})
      });
  }

  const { isReplyForm } = props
  const { isSending, isSent, errorMessage } = state

  let buttonClassName = 'comment-form__button'
  if (isSending) {
    buttonClassName += ` ${buttonClassName  }--sending`
  }

  return(
    <div>
      {!isReplyForm && (
        <h3>コメントを残す</h3>
      )}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input className="comment-form__input" type="text" name="name" placeholder="お名前（必須）" onChange={handleChange} />
        <input className="comment-form__input" type="text" name="email" placeholder="メールアドレス(必須・公開されません)" onChange={handleChange} />
        <textarea className="comment-form__input" name="body" cols="39" rows="4" placeholder="コメント（必須）" onChange={handleChange} />
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
            {isSending ? (
              <div className="comment-form__spinner-wrapper">
                <ClipLoader
                  className="comment-form__spinner"
                  color="#13c4a5"
                  loading={isSending}
                  size={30}
                />
              </div>
            ) : 'コメントを送信'}
          </button>
        )}
      </form>
    </div>
  )
}

export default CommentForm
