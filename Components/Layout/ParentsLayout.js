import React from 'react'
import Header from '../Header'

const ParentsLayout = ({children}) => {
  return (
    <main className="bg-gray-200 h-auto w-screen">
    <Header/>
     {children}
    </main>
  )
}

export default ParentsLayout
