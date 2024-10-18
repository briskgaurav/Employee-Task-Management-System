import React from 'react'

function Header() {
  return (
    <div className='h-[18%] w-full flex justify-between items-center py-12 px-10'>
        <h1 className='text-white text-2xl font-medium '>Hello, <br /><span className='font-bold text-3xl'> Gaurav 👋</span></h1>
        <button className='px-4 py-2 font-medium bg-red-400 rounded-lg'>Log Out</button>
        
    </div>
  )
}

export default Header