'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Header = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const route = useRouter();
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-cyan-500 text-black ">
      <div className="mx-4 md:mx-28">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-nowrap font-bold">
          <Link href="/">Flip Side Burgers</Link>
        </h1>
      </div>

        {/* Hamburger Icon */ }
        <div className="md:hidden">
          <button onClick={ () => setIsOpen( !isOpen ) } className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              { isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16M4 18h16" />
              ) }
            </svg>
          </button>
        </div>

       {/* Navigation Links */}
       <nav className={`absolute md:static top-16 left-0 w-full md:flex md:justify-end md:space-x-10 bg-cyan-500 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden md:block'}`}>
       <div className="flex flex-col mr-6 md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 p-4 md:p-0">
          <button onClick={ () => route.push( "/" ) }>Home</button>
          <button onClick={ () => route.push( "/menu" ) }>Menu</button>
          <button onClick={ () => route.push( "/about" ) }>About</button>
          <button onClick={ () => route.push( "/contact" ) }>Contact</button>
        </div>
        </nav>
      </header>
    </>
  )
}

export default Header 
