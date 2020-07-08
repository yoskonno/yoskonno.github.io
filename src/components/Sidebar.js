import React from 'react'
import Archives from './Archives'
import Tags from './Tags'
import RecentPosts from './RecentPosts'
import { BannerWidget } from './Banner'

const Sidebar = () => (
  <>
    <BannerWidget />
    <RecentPosts />
    <Archives />
    <Tags />
  </>
)

export default Sidebar
