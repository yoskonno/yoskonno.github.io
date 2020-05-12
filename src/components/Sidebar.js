import React from 'react'
import Archives from './Archives'
import RecentPosts from './RecentPosts'

const Sidebar = () => (
  <div className="submenu column is-3">
    <RecentPosts />
    <Archives />
  </div>
)

export default Sidebar
