import React from 'react'
import Archives from './Archives'
import RecentPosts from './RecentPosts'
import { BannerWidget } from './Banner'

const Sidebar = () => (
  <>
    <BannerWidget />
    <RecentPosts />
    <Archives />
  </>
)

export default Sidebar
