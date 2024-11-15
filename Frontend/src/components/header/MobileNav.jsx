import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

const MobileNav = ({menuItems,logo,onClose,hideLeft,onOpen}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href='/'>
            <img src={logo} alt="logo" />
        </a>
        <button onClick={onOpen} className='border border-primary rounded'>
            <FaBars className='w-7 h-7'/>
        </button>
        <div className={`transition-all w-full h-full bg-primary fixed top-0 z-50 ${hideLeft} flex justify-center items-center`}>
            <button onClick={onClose} className='absolute right-8 top-32'>
                <IoIosCloseCircleOutline className='w-7 h-7'/>
            </button>
            <div>
                <ul className='flex-col gap-7'> 
                    {
                        menuItems?.map((menu,index)=>(
                            <li key={index}>
                                <Link to={menu} className='capitalize font-medium text-2xl text-secondary'>
                                    {menu}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className='flex items-center gap-4 font-medium mt-10'>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded border'>Log In</button>
                    </li>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded border'>Sign Up</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNav