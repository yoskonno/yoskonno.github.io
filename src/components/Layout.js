import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import './all.sass'
import './scss/style.scss'

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title="Home | Gatsby + WordPress">

      <meta name="robots" content="noindex" />
      
    </Helmet>
    <Navbar />
    <main className="main">
      <div className="main-inner">
        <div className="contents-container">{children}</div>
        <aside className="sidebar-container">
          <Sidebar />
        </aside>
      </div>
    </main>
    <Footer />
  </>
)

export default TemplateWrapper
