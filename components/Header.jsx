import React from 'react'
import Image from 'next/image'
import { 
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/solid"

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        {
        /* <Image  
          src={`https://images.unsplash.com/photo-1646084765664-274c37ab3a6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`} 
          layout="fill"
          objectFit='contain'
          objectPosition={"left"}  
          priority
        /> */ 
        }
        <h1 className='text-red-500 text-lg md:text-2xl font-bold'>Find Place</h1>
      </div>

      {/* middle */}
      <div className='flex items-center md:border-2 md:shadow-sm rounded-full py-2'>
        <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 ' type="text" placeholder='Start you search..'/>
        <SearchIcon className='hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer'/>
      </div>

      {/* right */}
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
    </header>
  )
}

export default Header