import React from 'react'
import Archives from './Archives'
import RecentPosts from './RecentPosts'

const Sidebar = () => (
  <div className="submenu column is-one-quarter">
    <RecentPosts />
    <Archives />
  </div>
)

export default Sidebar
