import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
        <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2a3342] leading-normal
        xl:leading-relaxed'>VEGGIFY<br/>
        <span className='text-orange-300'>DEVELOPERS</span></h1>
        <form action='/search' className='bg-white p-4 rounded relative flex items-center border-grey-200 border-2 rounded-2xl'>
            <IoSearchSharp className='w-5 h-5 mr-2 text-neutral-300'/>
            <input name='query' type='search' placeholder='Search for a Recipe' className='outline-none w-full placeholder:text-grey-300' 
            id='search' required=""/>
        </form>
    </div>
  )
}
export default Hero