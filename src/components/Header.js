import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../img/logo.svg'

const Header = (props) => (
  <StaticQuery
    query={graphql`
      {
        allWordpressCategory(filter: { count: { gt: 0 } }) {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `}
    render={data => {
      console.log('@@@ data in header @@@')
      console.log(data)
      const { scrollStyle, fixedHeader } = props

      const isFixedClass = fixedHeader ? 'isFixed' : '';
          
      return (
        <header
          className="header"
          style={scrollStyle}
        >
          <div className={`header__upper ${isFixedClass}`}>
            <div className="header__upper-inner container">
              <p className="header__subtitle">リモート開発メインのソフトウェア開発企業のエンジニアブログです</p>
            </div>
          </div>
          <div className={`header__main ${isFixedClass}`}>
            <div className="header__main-inner container">
              <Link to="/" className="header__logo-link">
                <img className={`header__logo-image ${isFixedClass}`} src={logo} alt="もばらぶ" />
                <p className={`header__logo-text ${isFixedClass}`}>もばらぶエンジニアブログ</p>
              </Link>
              <div className="header__link-container">
                <Link
                  className="header__link"
                  to='/'
                >
                  Home
                </Link>
                <a
                  className="header__link"
                  href='https://mobalab.net/recruit/'
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  採用情報
                </a>
                {data.allWordpressCategory.edges.map(({node: category}) => {
                  if (category.name !== 'Uncategorized') {
                    return(
                      <Link
                        className="header__link"
                        to={`/categories/${category.slug}`}
                        key={category.slug}
                      >
                        {category.name}
                      </Link>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </header>
      )
    }}
  />
)

export default Header
