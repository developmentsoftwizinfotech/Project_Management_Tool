import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import Sidebar from '../../components/Admin/Sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='flex w-full gap-1' > 
        <div className='' >
          <Sidebar />
        </div>
          <div className='mt-20 md:pl-64 w-screen' >
            <Outlet />
          </div>
      </div>
    </div>
  )
}

export default Admin