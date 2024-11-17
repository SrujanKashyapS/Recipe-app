import React from 'react'
import FeaturedImg from '../../assets/featured-image.png'
const FeaturedSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
        <div className='relative'>
            <div className='absolute top-4 left-5 bg-white text-secondary px-3rounded md:uppercase tracking-wider'>
            </div>
            <img src={FeaturedImg}  alt="Featured image" />
        </div>
    </div>
  )
}

export default FeaturedSection