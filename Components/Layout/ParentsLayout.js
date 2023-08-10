import React from 'react'
import Header from '../Header'

const ParentsLayout = ({children}) => {
  return (
    <main className="bg-[#e8e9ee]  h-auto w-screen">
      <Header/>
      {children}
    </main>
  )
}

export default ParentsLayout
