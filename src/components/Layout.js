import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import './scss/style.scss'

const TemplateWrapper = ({ children }) => {

  const HEADER_HEIGHT_PC = 117
  const HEADER_HEIGHT_SP = 171
  const HEADER_HEIGHT_FIXED = 41

  const isSp = window.innerWidth < 1024
  const headerHeight = isSp ? HEADER_HEIGHT_SP : HEADER_HEIGHT_PC

  const scrollTop = () => {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  };

  const [isTop, setIsTop] = useState(true)
  const [headerOffset, setHeaderOffset] = useState(0)

  const onScroll = () => {
    
    const position = scrollTop()

    if (isSp) {
      setIsTop(true)
    } else if (position >= headerHeight + HEADER_HEIGHT_FIXED * 2) {
      setIsTop(false)
      setHeaderOffset(headerHeight * -1)
    } else if (position >= headerHeight) {
      setIsTop(false)
      setHeaderOffset(position * 0.5 - headerHeight * 1.5 - HEADER_HEIGHT_FIXED)
    } else {
      setIsTop(true)
    }
  }
  
  const scrollStyle = isTop
    ? null : { marginTop: `${headerOffset}px`, position: 'fixed' }

  const marginTopMain = isTop
    ? { marginTop: 0 } : { marginTop: `${headerHeight}px`}

  const fixedHeader = !isTop

  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  })

  return (
    <>
      <Helmet title="Home | Gatsby + WordPress">
  
        <meta name="robots" content="noindex" />
        
      </Helmet>
      <Header scrollStyle={scrollStyle} fixedHeader={fixedHeader} />
      <main className="main">
        <div className="main-inner" style={marginTopMain}>
          <div className="contents-container">
            {children}
          </div>
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
