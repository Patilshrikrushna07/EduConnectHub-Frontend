import React from 'react'
import PostCard from '../Posts/PostCard'
import ProfileCard from '../Profile/ProfileCard'

const MainLayout = () => {
  return (
    <div className="flex ">
    <div className="md:mt-14 mt-3 mb-14 md:w-[500px]">
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
    <div className="md:mt-14 mt-3 mb-14">
    <ProfileCard/>
    </div>
      </div>
  )
}

export default MainLayout
