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
    this.pathsBelow = []
    this.numbersAbove = []
    this.pathsAbove = []

    this.showFirstButton = false
    this.showLastButton = false
    this.showLeftDots = false
    this.showRightDots = false

    this.getPathsBelow()
    this.getPathsAbove()
  }

  getPathsBelow() {
    for (let i = this.humanPageNumber - 1; i >= this.humanPageNumber - 3 ; i -= 1 ) {
      if (i > 0) {
        this.numbersBelow.push(i)
        if (i === 1) {
          this.pathsBelow.push('/')
        } else {
          this.pathsBelow.push(`/page/${i}`)
        }
      }
    }
    this.numbersBelow.reverse()
    this.pathsBelow.reverse()

    console.log(`this.humanPageNumber: ${this.humanPageNumber}`)

    if (this.humanPageNumber !== 1) {
      this.showFirstButton = true
    }
    if (this.pathsBelow.length > 0 && this.pathsBelow[0] > 1) {
      //this.showFirstButton = true
    }

  }
  
  getPathsAbove() {
    for (let i = this.humanPageNumber + 1; i <= this.humanPageNumber + 3 ; i += 1 ) {
      if (i <= this.numberOfPages) {
        this.numbersAbove.push(i)
        this.pathsAbove.push(`/page/${i}`)
      }
    }

    if (this.numbersAbove.length > 0 && this.numbersAbove[-1] !== 1) {
      this.showLastButton = true
    }
  }

  render () {
    return (
      <div className="pagination" role="navigation">
        {this.showFirstButton && (
          <div className="pagination__item pagination__button" data-test="first-button">
            <Link to="/">
              {'<<'}
            </Link>
          </div>
        )}
        {this.previousPagePath && (
          <div className="pagination__item pagination__button-large">
            <Link to={this.previousPagePath} rel="prev">
              Previous
            </Link>
          </div>
        )}
        {this.showLeftDots && (
          <div className="pagination__item pagination__dots">
            ...
          </div>
        )}
        {this.numbersBelow.map((number, index) => {
        return (
          <div key={this.pathsBelow[index]} className="pagination__item pagination__button-number">
            <Link to={this.pathsBelow[index]}>
              {number}
            </Link>
          </div>
          )
        })}
        <div className="pagination__item pagination__button-number pagination__button-number--current">
          {this.humanPageNumber}
        </div>
        {this.numbersAbove.map((number, index) => {
          return (
            <div key={this.pathsAbove[index]} className="pagination__item pagination__button-number">
              <Link to={this.pathsAbove[index]}>
                {number}
              </Link>
            </div>
          )
        })}
        {this.showRightDots && (
          <div className="pagination__item pagination__dots">
            ...
          </div>
        )}
        {this.nextPagePath && (
          <div className="pagination__item pagination__button-large">
            <Link to={this.nextPagePath} rel="next">
              Next
            </Link>
          </div>
        )}
        {this.showLastButton && (
          <div className="pagination__item pagination__button" data-test="last-button">
            <Link to={`foo${this.numberOfPages}`}>
              {'>>'}
            </Link>
          </div>
        )}
      </div>
    )
  }
}
