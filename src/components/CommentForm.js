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
    console.log('@@@ handle chagne')
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, body } = this.state
    const { wordpressId } = this.props

    const formData = new FormData;
    formData.append('post', wordpressId)
    formData.append('author_name', name);
    formData.append('author_email', email);
    formData.append('content', body);

    console.log('making axios POST !!!')

    axios.post(`http://stg-engineering.mobalab.net/wp-json/wp/v2/comments`, formData)
      .then(res => {
        console.log('axios POST response !!!')
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return(
      <section className="section">
        <div>
          <h3>コメントを残す</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              名前:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
              メールアドレス(公開はされません):
              <input type="text" name="email" onChange={this.handleChange} />
            </label>
            <label>
              本文:
              <input type="text" name="body" onChange={this.handleChange} />
            </label>
            <button type="submit">コメントを送信</button>
          </form>
        </div>
      </section>
    )
  }
}

export default CommentForm
