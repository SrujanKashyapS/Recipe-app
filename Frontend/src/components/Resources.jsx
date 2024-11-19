import React from 'react'
const Resources = () => {
  return (
      <section className='px-6 lg:px-12 py-20'>
        <h1 className='text-3xl text-center mb8 font-semibold text-seconday sm:text-5xl sm:leading-relaxed'>Resources</h1>

        <article className='py-6 sm:py-12'>
            <div className='container p-6 mx-auto space-y-8'></div>
                <div className='space-y-2   text-center'><div/>
            <h2 className='text-3xl font-bold'>Parten reprimque an pro</h2>
            <p className='text-sm mb-16'>
                Qualisque quaeque definitionem at quo
            </p>
            <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
                {
                blogData.map((blog, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <img src={blog.imgSrc} alt={blog.title} />
                        <h3 className='text-2xl font-semibold'>{blog.title}</h3>
                        <p className='text-sm'>{blog.date}</p>
                        <p className='text-sm'>{blog.views}</p>
                        <p className='text-sm'>{blog.category}</p>
                        </div>
                ))
            }
                 </div>
            </div>
        </article>


      </section>
  )
}
export default Resources