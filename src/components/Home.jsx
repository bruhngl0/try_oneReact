import React from 'react'
import vg from "../assets/2.webp";


  import {  AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram } from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className= "home" id= "home">
      <main>
        <h1>TechStar</h1>
        <p>Solution to all your problems</p>
      </main>
      home
    </div>


    <div className= "home2">
      <img src= {vg} alt= "graphics"/>
    

      <div>
        <p>
          We are your one and only solution to the tech problems you face everyday.
          We are a leading tech company whose aim is to increase the problem solving ability in children.
        </p>
    </div>
    </div>


    <div className= "home3" id= "about">
      <div>
        <h1>
          Who are we?
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium hic ullam nulla magnam excepturi. Nam debitis quas quisquam nobis, illo eaque? Eaque consequuntur fugit voluptatibus soluta velit animi doloremque.</p>
      </div>


    </div>

    < div className='home4' id= "brands">
      <div>
        <h1>Brands</h1>

        <article>
          <div Style = {{
            animationDelay: "0.3s",
          }}>

            <AiFillGoogleCircle />
            <p>Google</p>

          </div>

          <div Style = {{
            animationDelay: "0.5s",
          }}>

            <AiFillAmazonCircle />
            <p>Amazon</p>

          </div>

          <div Style = {{
            animationDelay: "0.7s",
          }}>

            <AiFillInstagram />
            <p>Instagram</p>

          </div>

          <div Style = {{
            animationDelay: "1s",
          }}>

            <AiFillYoutube />
            <p>YouTube</p>

          </div>


        </article>
      </div>

    </div>







    </>
  )
}

export default Home
