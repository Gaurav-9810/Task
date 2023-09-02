import React from 'react'

const Content = () => {
  return (
    <div className='bg-cyan-400 w-[100%] h-[28rem] flex justify-center items-center text-white  '>
      <div className='flex flex-col gap-4 w-[30rem]'>
            <div className=' font-semibold  text-3xl md:text-5xl flex items-center gap-6  justify-center'>
            
            <p className=' '>I </p>
            <svg className=' relative top-1 text-3xl md:text-4xl' fill='white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
            <p className=''>Color</p>
            </div>
            <p className='text-center text-sm px-4 md:text-lg md:px-0'>Color really isn't that diffcult to get right. if you know where to start Learn by doing and you'll be a master in no time</p>
           <div className='flex justify-center'>
           <button className='px-3 py-1 rounded-3xl bg-red-500 text-white '>Over to you</button>
           </div>
      </div>

    </div>
  )
}

export default Content