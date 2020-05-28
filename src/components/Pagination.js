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
  }
  
  getPathsAbove() {
    for (let i = this.humanPageNumber + 1; i <= this.humanPageNumber + 3 ; i += 1 ) {
      if (i <= this.numberOfPages) {
        this.numbersAbove.push(i)
        this.pathsAbove.push(`/page/${i}`)
      }
    }
  }

  render () {
    return (
      <div className="pagination" role="navigation">
        {this.shouldComponentUpdatepreviousPagePath && (
        <div className="pagination__item pagination__button-large">
          <Link to={this.previousPagePath} rel="prev">
            Previous
          </Link>
        </div>
        )}
        {this.numbersBelow.map((number, index) => {
        return (
          <div key={this.pathsBelow[index]} className="pagination__item pagination__button-number">
            <a href={this.pathsBelow[index]}>{number}</a>
          </div>
          )
        })}
        <div className="pagination__item pagination__button-number pagination__button-number--current">
          {this.humanPageNumber}
        </div>
        {this.numbersAbove.map((number, index) => {
        return (
          <div key={this.pathsAbove[index]} className="pagination__item pagination__button-number">
            <a href={this.pathsAbove[index]}>{number}</a>
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
      </div>
    )
  }
}
