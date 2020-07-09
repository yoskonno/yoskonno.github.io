import React from 'react'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      isLoaded: false,
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

  render() {
    const { comments } = this.state

    if (comments.length > 0) {
      return (
        <div>
          <h3>コメント</h3>
          {comments.map((comment) => {
            return(
              <div key={comment.id}>
                <div>{`${comment.author_name}さん`}</div>
                <div>{comment.date}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: comment.content.rendered
                  }}
                />
              </div>
            )
          })}
        </div>
      )
    }
    return null
  }
}

export default Comments
