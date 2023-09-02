import React from 'react'

const Card = ({data}) => {
  return (
    <div className=' flex flex-col gap-2 w-52 sm:w-64 md:w-52 lg:w-64 md:h-80 text-center shadow-2xl px-4  md:px-2 py-6 bg-white '>
         <div className='flex justify-center   '>{data.img}</div>
          <h1 className='mt-6 font-bold'>{data.title}</h1>
          <p className="font-thin text-[14px] md:text-sm">{data.para}</p>
    </div>
  )
}

export default Card