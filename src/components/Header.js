import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Header = () => {

  const scrollTop = () => {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  };

  const [isTop, setIsTop] = useState(true)
  const [headerOffset, setHeaderOffset] = useState(0)

  const onScroll = () => {

    const position = scrollTop()
    if (position >= 117) {
      setIsTop(false)
      setHeaderOffset((position - 117 - 117)) // 117)
    } else {
      setIsTop(true)
    }
  }
  
  const scrollStyle = isTop
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "rgb(249, 249, 249)", opacity: 0.8, marginTop: `${headerOffset}px`, position: 'fixed' }

  // note: Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  })

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
