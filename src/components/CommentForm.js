import React from 'react'
import axios from 'axios'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments: [],
      isLoaded: false,
      name: '',
      email: '',
      body: ''
    };
  }

  componentDidMount() {
    const { wordpressId } = this.props
    //fetch(`http://stg-engineering.mobalab.net/wp-json/wp/v2/comments?post=${wordpressId}`)
    fetch(`https://test.super-fast.net/wp-json/wp/v2/comments?post=13`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('\n\n FETCHED RESUlT:')
          console.log(result)
          this.setState({
            isLoaded: true,
            comments: result
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleChange(event) {
    console.log('@@@ handle chagne')
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, body } = this.state

    const formData = new FormData;
    formData.append('post', '13')
    formData.append('author_name', name);
    formData.append('author_email', email);
    formData.append('content', body);

    console.log('making axios POST !!!')

    axios.post(`https://test.super-fast.net/wp-json/wp/v2/comments`, formData)
      .then(res => {
        console.log('axios POST response !!!')
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    const { comments } = this.state

    return(
      <section className="section">
        <div>
          <h3>コメント</h3>
          {comments.length !== 0 && (
            comments.map((comment) => {
            return(<div>{comment.content.rendered}</div>)
            })
          )}
          {comments.length === 0 && (
            <div>コメントはまだありません。</div>
          )}

        </div>
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
