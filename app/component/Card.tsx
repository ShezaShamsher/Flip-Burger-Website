import React from 'react'
import Image from 'next/image'

interface CardType {
    imageURL: string
    name: string
    price: string
}


const Card = ( data: CardType ) => {
    return (
        <>

            <div className='border-solid border-2 rounded-xl h-80 w-64 bg-white transition-transform hover:scale-105 transform duration-300 shadow-md'>
                <Image className='m-8'
                    src={ data.imageURL }
                    alt={ data.name }
                    height={ 150 }
                    width={ 100 }
                />
                <p className='font-serif mt-10 mx-10 font-semibold'>{ data.name }</p>
                <p className='font-mono mt-2 mx-10 font-extrabold text-2xl'>{ data.price }</p>
                <button className='bg-red-600 text-slate-50 p-2 rounded-lg ml-32 mt-4'>Add to cart</button>
            </div>

        </>
    )
}

export default Card
