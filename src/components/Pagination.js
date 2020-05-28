import React from 'react'
import { Link } from 'gatsby'

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.previousPagePath = props.pageContext.previousPagePath
    this.nextPagePath = props.pageContext.nextPagePath
    this.humanPageNumber = props.pageContext.humanPageNumber
    this.numberOfPages = props.pageContext.numberOfPages
    this.threePathsBelow = []
    this.threePathsAbove = []

    this.getThreePathsBelow()
    this.getThreePathsAbove()
  }

  getThreePathsBelow() {
    const threePathsBelow = []
    for (let i = this.humanPageNumber - 1; i >= this.humanPageNumber - 3 ; i -= 1 ) {
      if (i > 0) {
        threePathsBelow.push({
          number: i,
          path: `/page/${i}`,
        })
      }
    }
    this.threePathsBelow = threePathsBelow
  }
  
  getThreePathsAbove() {
    const threePathsAbove = []
    for (let i = this.humanPageNumber + 1; i <= this.humanPageNumber + 3 ; i += 1 ) {
      if (i <= this.numberOfPages) {
        threePathsAbove.push({
          number: i,
          path: `/page/${i}`,
        })
      }
    }
    this.threePathsAbove = threePathsAbove
  }

  render () {
      return (
        <nav className="pagination" role="navigation">
          {this.shouldComponentUpdatepreviousPagePath && (
          <div className="pagination__item pagination__button-large">
            <Link to={this.previousPagePath} rel="prev">
              Previous
            </Link>
          </div>
          )}
          {this.threePathsBelow.reverse().map((path) => {
          return (
            <div className="pagination__item pagination__button-number">
              <a href={path.path}>{path.number}</a>
            </div>
            )
          })}
          <div className="pagination__item pagination__button-number pagination__button-number--current">
            {this.humanPageNumber}
          </div>
          {this.threePathsAbove.map((path) => {
          return (
            <div className="pagination__item pagination__button-number">
              <a href={path.path}>{path.number}</a>
            </div>
          )
        })}
          {this.nextPagePath && (
          <div className="pagination__item pagination__button-large">
            <Link to={this.nextPagePath} rel="next">
              Next
            </Link>
          </div>
        )}
        </nav>
    )
  }
}
