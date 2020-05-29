import React from 'react'
import { Link } from 'gatsby'

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.previousPagePath = props.pageContext.previousPagePath
    this.nextPagePath = props.pageContext.nextPagePath
    this.humanPageNumber = props.pageContext.humanPageNumber
    this.numberOfPages = props.pageContext.numberOfPages
    
    this.numbersBelow = []
    this.numbersAbove = []

    this.showFirstButton = false
    this.showLastButton = false
    this.showLeftDots = this.humanPageNumber >= 6
    this.showRightDots = this.humanPageNumber < this.numberOfPages - 4

    this.getNumbersBelow()
    this.getNumbersAbove()
  }

  getNumbersBelow() {
    for (let i = this.humanPageNumber - 1; i >= this.humanPageNumber - 3 ; i -= 1 ) {
      if (i > 0) {
        this.numbersBelow.push(i)
      }
    }
    this.numbersBelow.reverse()

    if (this.humanPageNumber !== 1) {
      this.showFirstButton = true
    }
  }
  
  getNumbersAbove() {
    for (let i = this.humanPageNumber + 1; i <= this.humanPageNumber + 3 ; i += 1 ) {
      if (i <= this.numberOfPages) {
        this.numbersAbove.push(i)
      }
    }

    if (this.humanPageNumber !== this.numberOfPages) {
      this.showLastButton = true
    }
  }

  render () {
    return (
      <div className="pagination" role="navigation">
        {this.previousPagePath && (
          <div
            className="pagination__item pagination__button-large"
          >
            <Link to={this.previousPagePath} rel="prev">
              Previous
            </Link>
          </div>
        )}
        {this.showFirstButton && (
          <div
            className="pagination__item pagination__button"
            data-test="first-button"
          >
            <Link to="/">
              1
            </Link>
          </div>
        )}
        {this.showLeftDots && (
          <div
            className="pagination__item pagination__dots"
            data-test="left-dots"
          >
            ...
          </div>
        )}
        {this.numbersBelow.map((number) => {
          const path = number === 1 ? `/` : `/page/${number}`
          return (
            <div key={path} className="pagination__item pagination__button-number">
              <Link to={path}>
                {number}
              </Link>
            </div>
          )
        })}
        <div
          className="pagination__item pagination__button-number pagination__button-number--current"
        >
          {this.humanPageNumber}
        </div>
        {this.numbersAbove.map((number) => {
          const path = `/page/${number}`
          return (
            <div
              key={path}
              className="pagination__item pagination__button-number"
            >
              <Link to={path}>
                {number}
              </Link>
            </div>
          )
        })}
        {this.showRightDots && (
          <div
            className="pagination__item pagination__dots"
            data-test="right-dots"
          >
            ...
          </div>
        )}
        {this.showLastButton && (
          <div
            className="pagination__item pagination__button"
            data-test="last-button"
          >
            <Link to={`page/${this.numberOfPages}`}>
              {this.numberOfPages}
            </Link>
          </div>
        )}
        {this.nextPagePath && (
          <div
            className="pagination__item pagination__button-large"
          >
            <Link to={this.nextPagePath} rel="next">
              Next
            </Link>
          </div>
        )}
      </div>
    )
  }
}
