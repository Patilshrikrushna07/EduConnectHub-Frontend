import React from 'react'
import Header from '../Header'

const ParentsLayout = ({children}) => {
  return (
    <main className='bg-gray-100'>
      <Header/>
     {children}
    </main>
  )
}

export default ParentsLayout
