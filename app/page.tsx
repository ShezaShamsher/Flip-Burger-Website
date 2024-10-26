'use client'
import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Home = () => {
  const route = useRouter()
  return (
    <>

      <main className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <Header />

        <div className='my-16 mx-28'>
          <Image className='float-right w-auto' src={ '/burger.png' } alt='burger' height={ 700 } width={ 300 } />
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 p-4 font-serif ml-10" >Flip Side Burgers</h1>

          <p className="mx-20 font-extralight text-base md:text-lg lg:text-xl ml-14">"Crafted with love, served with joy.
            Join us for a burgers journey." </p>
        </div>
        <div className='flex flex-col items-center mt-10 space-y-4 md:flex-row md:justify-center md:space-x-10 md:space-y-0 mb-8'>
          <button className=' bg-gray-200 text-black px-6 py-3 rounded-xl' onClick={()=> route.push('/menu')}> Order Now</button>
          <button className='border-solid border-2 border-white px-4 py-2 rounded-lg' onClick={ () => route.push( '/menu' ) }>See Menu ➡</button>
        </div>
        <Footer />
      </main>

    </>
  )
}

export default Home
