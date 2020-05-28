import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class Page extends React.Component {

  componentDidMount() {
    console.log('まじか')
  }

  render() {
    const { data } = this.props
    const { wordpressPage: page } = data

    return (
      <Layout>
        <section className="section section--gradient">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {page.title}
                </h2>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
