import React from 'react'
import logo from '../../assets/logo.png'



const Navbar = () => {
  return (
    <div className='fixed border-b-2 h-16 w-full bg-white ' >
        <div className='absolute flex justify-center items-center left-5'>
            <img src={logo} alt='logo' className='w-16' />
            <p className='font-mono text-lg bold font-bold ' >Softwiz</p>
        </div>
    </div>
  )
}

export default Navbar