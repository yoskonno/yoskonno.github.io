import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="もばらぶ" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <p className="navbar-item">もばらぶエンジニアブログ</p>
        <a
          className="navbar-item"
          href='/'
        >
          Home
        </a>
        <a
          className="navbar-item"
          href='https://mobalab.net/recruit/'
          rel="noopener noreferrer"
          target="_blank"
        >
          採用情報
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
