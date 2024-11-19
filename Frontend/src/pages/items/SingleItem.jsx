import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleItem = () => {
    const item = useLoaderData();
    const extractNumber = (timeString) => {
        let timeArray = timeString.split(" ");
        return parseInt(timeArray[0])
    }
    let prepTime = extractNumber(item?.more.prep_time);
    let cookTime = extractNumber(item?.more.cook_time);
    const totalTime = prepTime + cookTime
  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        <article>
            <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
                <picture>
                    <img src={item.thumbnail_image} alt="" className='md:max-w-[90%] w-full md:h[570px] md:rounded-xl md:mx-auto'/>
                </picture>
                <div className='px-8'>
                    <h1 className='text-4xl mt-12 text-secondary'>{item.name}</h1>
                    <p className='mt-6'>An easy and quick dish, perfect for any meal. This classic omlette combines beaten egg cooked to perfection, optionally filled with your choice of cheese, vegetables or meats.</p>
                    <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                        <h3 className='text-xl font-semibold ml-2'>Preparation Time</h3>
                        <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
                            <li className='pl-3'>
                                <p>
                                    <span>Time:</span> <span>{totalTime} minutes</span>
                                </p>
                            </li>
                            <li className='pl-3 mt-3'>
                                <p>
                                    <span>Time:</span> <span>{item?.more.prep_time}</span>
                                </p>
                            </li>
                            <li className='pl-3 mt-3'>
                                <p>
                                    <span>Time:</span> <span>{item?.more.cook_time}</span>
                                </p>
                            </li>
                        </ul>
                    </article>
                    <div className='mt-5'>
                        <h3 className='text-xl font-semibold ml-2'>Preparation Time</h3>
                        <ul className='list-disc marker:text-blue-500 marker:align-middle mt-4 ml-6 text-secondary'>
                            {
                                item?.ingredients.map((ingredient,index) => (
                                    <li key={index} className='pl-4 mt-2'>
                                        <span>{ingredient?.name}</span>
                                        <span> {ingredient?.quantity}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default SingleItem