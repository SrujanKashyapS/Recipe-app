import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryWrapper from './CategoryWrapper';
import axios from 'axios';
const CategoryPage = () => {
    const { category } = useParams();
    const {items,setItems}=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const fetchItems=async()=>{
            setLoading(true);
            try{
                const response= await axios.get(`http://localhost:5000/api/items/${category}`);
                setItems(response.data);
            }catch(error){
                setError(error.message || "Error loading category");
            }
            fetchCategoryData();
        }
    },[category]);
  return (
    <div>
        <h1 className='text-center text-3xl py-10 text-secondary font-semibold sm:text-6xl 
        sm:leading-relaxed capitalize'>{category}</h1>
        <CategoryWrapper/>

        <ul>
          {
            items && items?.map(item => (
              <li key={item._id}>{item.name}</li>
            ))
          }
        </ul>
    </div>
  )
} 

export default CategoryPage