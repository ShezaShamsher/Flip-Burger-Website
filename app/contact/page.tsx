'use client'
import React from 'react'
import Link from 'next/link'
import Header from '../component/Header'
import { useRouter } from 'next/navigation'
import Footer from '../component/Footer'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalDiningIcon from '@mui/icons-material/LocalDining';


const Contact = () => {
  const router = useRouter();
  return (
    <>
      <Header />

      <div className="p-4 md:p-6 lg:p-10">
        <h1 className='font-serif font-bold text-2xl mb-4'>Visit Us</h1>

        <p className='font-medium flex items-center md:block lg:flex'> <LocationOnIcon className='mr-2' /> Plot 42 D, Commercial Area A market, Plot 46 A, Commercial Area A
          <br />
          Phase 2 Defence Housing Authority, Karachi, Karachi City, Sindh 75500</p>
        <hr className='my-4' />

        <h1 className='flex items-center mb-6'><LocalPhoneIcon className='mr-2' />
          <b>Phone: </b> 0345-8364192</h1>
        <hr className='my-4' />

        <h1 className='font-serif font-bold text-2xl mb-4 flex items-center'>Timing <AccessTimeIcon className='ml-2' /></h1>
        <ul className='list-disc list-inside space-y-1'>
          <li><b>Monday: </b>11:00am - 1:00am</li>
          <li><b>Tuesday: </b>11:00am - 1:00am</li>
          <li><b>Wednesday: </b>11:00am - 1:00am</li>
          <li><b>Thursday: </b>11:00am - 1:00am</li>
          <li><b>Friday: </b>  12:00pm -1:00am</li>
          <li><b>Saturday: </b>11:00am - 3:00am</li>
          <li><b>Sunday: </b>11:00am - 3:00am</li>
        </ul>
        <hr className='my-4' />

        <h1 className='flex items-center space-x-2'><LocalDiningIcon />
          <span>Place Order</span>
          <Link href={ 'https://www.foodpanda.com' } target='_blank'>Foodpanda</Link></h1>
      </div>
      < Footer />
    </>
  )
}

export default Contact 