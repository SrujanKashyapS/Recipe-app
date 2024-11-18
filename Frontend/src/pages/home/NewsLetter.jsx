import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full md:w-2/3 mx-auto flex flex-col items-center p-10'>
        <h3 className='text-secondary font-semibold text-center text-4xl'>Sign up for my weekly newsletter!</h3>
        <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>
            Weekly emails with my latest recipies, cooking tips and tricks and product reccomendations! <br /> you'll be set up in minutes.
            </p>
            <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20'>
                <input className="felx flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]" type="text" placeholder='name' />
                <input className="felx flex-grow px-4 py-4 rounded text-gray-400 outline-none placeholder:text-[#1b2629]" type="text" placeholder='Email Address' />
                <button className='flex-none rounded-md bg-btncolor px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-btncolor hover:border-btncolor hover:border'>Started</button>
            </div>
    </div>
  );
};

export default NewsLetter


// 'mt-2 md:mt-0 md:ml-2 bg-btncolor hover:text-secondary outline-none hover:border hover:border-btncolor hover:bg[#f9f7f3] text white shadow-lg rounded px-8 py-4'