import axios from 'axios'
import React , { useEffect, useState } from 'react'
import Card from './Card'
import CategoryWrapper from "../pages/category/CategoryWrapper"

const Recipes = () => {
    const[items, setItems]=useState([]);
    useEffect(()=>{
        const getLatestItems=async()=>{
            const response=await axios.get(`http://localhost:5000/api/all-items`);
            setItems(response.data);
        }
        getLatestItems()
    },[])
  return (
      <div className='px-6 lg:px-12 py-20'>
      <h2 className='text-3xl text-center mb8 font-semibold text-seconday sm:text-5xl sm:leading-relaxed'>All Recipes</h2>
      <CategoryWrapper/>

        <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 gap-8'>
           { items.map(item => (
                <Card key={item._id} item={item}/> 
            ))}
        </ul>
      </div>
    )
}
export default Recipes