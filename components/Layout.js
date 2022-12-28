import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='m-auto overflow-hidden h-[100vh]'>
      <Navbar />
      <div className='flex gap-6 md:gap-20 '>
        <div className='h-[92vh] hover:overflow-auto'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto flex-1'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout