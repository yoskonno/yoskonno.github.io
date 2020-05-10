import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import './all.sass'
import './scss/style.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <main className="columns">
      <div className="column">{children}</div>
      <Sidebar />
    </main>
    <Footer />
  </div>
)

export default TemplateWrapper
