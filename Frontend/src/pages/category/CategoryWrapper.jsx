import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem ({name,href,background,color}) {
    const style = {
        background: background,
        color: color,
        bordercolor: color
    }
    return(
        <div>
            <Link to={href} className='rounded-full'>
                <div className='uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    )
}
function CategoryList () {
    return(
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <CategoryItem name="entrees" href="/categories/entrees" background="#f0f5c4" color="#59871f"/>
            <CategoryItem name="breakfast" href="/categories/breakfast" background="#efedfa" color="#3c3a8f"/>
            <CategoryItem name="lunch" href="/categories/lunch" background="#e5f7f3" color="#1f8787"/>
            <CategoryItem name="desserts" href="/categories/desserts" background="#e8f5fa" color="#397a9e"/>
            <CategoryItem name="sides" href="/categories/sides" background="#feefc9" color="#d16400"/>
            <CategoryItem name="drinks" href="/categories/drinks" background="#ffeae3" color="#f049e3"/>
        </div>
    ) 
}
const CategoryWrapper = () => {
  return (
    <div>
        <CategoryList/>    
    </div>
  )
}

export default CategoryWrapper