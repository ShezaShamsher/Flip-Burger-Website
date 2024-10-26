import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Card from '../component/Card'

const Menu = () => {
  return (
    <>


      < Header />
      <h2 className="text-center text-3xl font-bold mt-10" >Menu</h2>

      <div className='flex flex-wrap justify-center gap-6 my-16'>

        <Card imageURL='/zinger.b.webp' name='Chicken Zinger burger' price='$20' />

        <Card imageURL='/ch.chesseburger.png' name='Chicken Chesse Burger' price='$45' />

        <Card imageURL='/ch.crunch.png' name='Chicken Crunch Burger' price='$50' />

        <Card imageURL='/ch.jalapeno burger.png' name='Ch.Jalapeno Burger' price='$40' />

        <Card imageURL='/beefburger.png' name='Beef Burger' price='$36' />

        <Card imageURL='/hamburger.png' name='HamBurger' price='$70' />

        <Card imageURL='/grillburger.png' name='Grill Chicken Burger' price='$65' />

        <Card imageURL='/classicburger.png' name='Classic Burger' price='$25' />

        <Card imageURL='/flying burger.png' name='Flying Burger' price='$80' />


      </div>
      < Footer />



    </>
  )
}

export default Menu
