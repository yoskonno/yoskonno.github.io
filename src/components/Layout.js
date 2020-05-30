import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import './scss/style.scss'

const TemplateWrapper = ({ children }) => {

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

  const marginTopMain = isTop ? { marginTop: 0 } : { marginTop: '117px'}

  // note: Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  })

  return (
    <>
      <Helmet title="Home | Gatsby + WordPress">
  
        <meta name="robots" content="noindex" />
        
      </Helmet>
      <Header scrollStyle={scrollStyle} />
      <main className="main">
        <div className="main-inner" style={marginTopMain}>
          <div className="contents-container">{children}</div>
          <aside className="sidebar-container">
            <Sidebar />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TemplateWrapper
