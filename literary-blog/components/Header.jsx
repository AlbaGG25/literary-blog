import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src='/assets/book.png' width={180} height={100} className="w-[130px] sm:w-auto"/>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get started <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"></path></svg></button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Literary Reviews</h1>
        <p className="mt-10 max-w-[47rem] m-auto text-xs sm:text-base">Beyond the Cover: Real Reviews for Real Readers</p>
        <form className='flex justify-between max-w-[31rem] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
            <input type="email" placeholder="Enter your email" className='pl-4 outline-none'/>
            <button className='border-1 border-black py-4 px-2 sm:px-8 active:bg-gray-700 active:text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header
