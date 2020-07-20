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
      body: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
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

    const blogUrl = 'https://test.super-fast.net'
    axios.post(`${blogUrl}/wp-json/wp/v2/comments`, formData, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
      .then(res => {
        console.log('axios POST response !!!')
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    const { isReplyForm } = this.props
    return(
      <div>
        <h3>{isReplyForm ? '返信する' : 'コメントを残す'}</h3>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="お名前" onChange={this.handleChange} />
          <input type="text" name="email" placeholder="メールアドレス(公開されません)" onChange={this.handleChange} />
          <textarea name="body" cols="39" rows="4" placeholder="コメント" onChange={this.handleChange} />
          <button type="submit">コメントを送信</button>
        </form>
      </div>
    )
  }
}

export default CommentForm
