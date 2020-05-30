import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Header = (props) => {

  const { scrollStyle } = props

  return (
    <header
      className="header"
      style={scrollStyle}
    >
      <div className="header__upper">
        <div className="header__upper-inner container">
          <p className="header__subtitle">リモート開発メインのソフトウェア開発企業のエンジニアブログです</p>
        </div>
      </div>
      <div className="header__main">
        <div className="header__main-inner container">
          <Link to="/" className="header__logo-link">
            <img className="header__logo-image" src={logo} alt="もばらぶ" />
            <p className="header__logo-text">もばらぶエンジニアブログ</p>
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
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
