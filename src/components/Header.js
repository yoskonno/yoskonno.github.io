import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const scrollTop = () => {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
};

const Header = () => {

  const [isTop, setIsTop] = useState(true)

  const onScroll = () => {

    const position = scrollTop()
    if (position >= 80) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  }
  
  const scrollStyle = isTop
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "#000", opacity: 0.8 }

  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  })

  return (
    <header
      className="header"
      style={scrollStyle}
    >
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
    </header>
  )
}

export default Header
