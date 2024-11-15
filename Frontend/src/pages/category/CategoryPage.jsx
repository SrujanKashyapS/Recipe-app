import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryWrapper from './CategoryWrapper';

const CategoryPage = () => {
    const { category } = useParams();
  return (
    <div>
        <h1 className='text-center text-3xl py-10 text-secondary font-semibold sm:text-6xl 
        sm:leading-relaxed capitalize'>{category}</h1>
        <CategoryWrapper/>
    </div>
  )
} 

export default CategoryPage