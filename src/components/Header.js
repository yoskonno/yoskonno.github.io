import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../img/logo.svg'

const Header = () => (
  <header className="header">
    <Link to="/" className="header__logo-link">
      <img className="header__logo-image" src={logo} alt="もばらぶ" />
      <p className="header__logo-text">もばらぶエンジニアブログ</p>
    </Link>
    <div className="header__link-container">
      <a
        className="header__link"
        href='/'
      >
        Home
      </a>
      <a
        className="header__link"
        href='https://mobalab.net/recruit/'
        rel="noopener noreferrer"
        target="_blank"
      >
        採用情報
      </a>
    </div>
  </header>
)

export default Header
