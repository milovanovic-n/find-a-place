import React from 'react'
import Image from "next/image"

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <div className='banner-overlay'></div>
      <Image 
        src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        layout='fill'
        objectFit='cover'
        priority
      />

      <div className='absolute z-20 top-1/2 w-full text-center'>
        <p className='text-sm sm:text-xl'>Not sure where to go? Perfect.</p>
        <button 
          className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl
            active:scale-90 transition duration-150
          '>
            Flexible
        </button>
      </div>
    </div>
  )
}

export default Banner