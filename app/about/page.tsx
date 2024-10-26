import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const About = () => {
  return (
    <>

      <Header />
      <h1 className="text-3xl font-bold text-center my-8 font-roboto">About Us</h1>
      <div className='mx-24 md:block lg:flex mb-8'>
        <p >Welcome to Flip Side Burgers – Where Every Bite Tells a Story!
          Founded in 2009, Flip Side Burgers has been on a mission to redefine the burger experience. What started as a small passion project quickly grew into a beloved local staple, known for its unique and flavorful burgers that tantalize taste buds and satisfy cravings.
          At Flip Side Burgers, we believe that a great burger is more than just a meal—it’s an experience. Our chefs are dedicated to crafting one-of-a-kind recipes, using high-quality ingredients sourced from local farms. From our signature blends of beef to our innovative toppings and house-made sauces, each burger is a testament to our commitment to flavor and creativity.
          We take pride in our diverse menu, featuring everything from classic favorites to adventurous creations, ensuring there’s something for everyone. Whether you’re a meat lover, vegetarian, or vegan, our customizable options allow you to create the perfect burger tailored to your taste.
          Join us at Flip Side Burgers, where we celebrate the art of the burger and the joy of community. With a welcoming atmosphere, friendly staff, and a passion for delicious food, we invite you to flip the script on your typical dining experience and savor the unique flavors we have to offer!
          As we continue to grow, our passion for innovation remains at the heart of everything we do. We love experimenting with flavors and introducing new items to keep our loyal customers coming back for more. Come visit us and discover why Flip Side Burgers has become a beloved destination for burger lovers since 2009!
        </p>
      </div>
      <Footer />

    </>

  )
}

export default About
// 