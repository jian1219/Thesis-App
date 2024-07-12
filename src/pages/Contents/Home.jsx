import React from 'react'

import "../../Css/Home.css"
import Icon from "../../Images/anhs_logo-removebg-preview.png"
import IconAr from "../../Images/AR logo2.png"

import Cianon from "../../Images/cianon.jpg"
import Me from "../../Images/ian me.jpg"

function Home() {
  return (
    <div className='px-10 HomeContainer'>
      <div className='HomeGrid'>
        <div>
          <img src={Icon} className='w-[300px]' alt="" />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>AGUSAN NATIONAL HIGH SCHOOL</h1>
          <h2 className='text-sm mb-4 font-semibold'>ANHS- WHERE OUR DREAMS START TO COME TRUE..</h2>
          <p>Agusan National High School is a secondary school under the flagship of the Department of Education- Division of Cagayan de Oro City. 
            The school site is located in the heart of the barangay near the Agusan  Barangay Hall, 
            the Roman Catholic Church & Philippine Independent Church with a total land area of approximately 9,826 sq.m. 
            It’s about 30 meters from the National Hi-way & accessible to all land transportation.
          </p>
          <p className='mt-4'>This site is for Admin for update Information.</p>
        </div>
      </div>
      <div className='GridHome1'>
        <div>
          <p>Augmented Reality (AR) is an interactive experience where digital content is overlaid onto the real world, 
            enhancing the user's perception of their surroundings. Using devices like smartphones, tablets, or AR glasses, 
            users can see and interact with 3D models, animations, and other digital elements that appear to coexist with the physical environment. 
            AR technology has diverse applications in education, gaming, healthcare, retail, and more, offering immersive experiences that blend 
            virtual and real-world elements seamlessly.</p>
        </div>
        <div>
          <img src={IconAr} alt="" />
        </div>
      </div>
      <div>
        <h1 className='text-center text-2xl font-semibold pb-2 '>-----CREATORS-----</h1>
        <div className='GridHome2'>
          <div className='imageCreatorDiv'>
            <div>
              <img className='imageCreator' src={Me} alt="" />
            </div>
            <div className='px-5 py-6 text-[14px]'>
              <p>As part of our thesis project at Agusan National High School, my partner, 
                Cianon Escabarte, and I have collaborated to create an Augmented Reality (AR) 
                application designed to enhance school navigation. The app features pathfinding 
                capabilities and provides comprehensive information about the school, making it 
                easier for students and visitors to find their way around. I took on the primary 
                role of developing and coding the AR application, ensuring it is user-friendly 
                and meets the specific needs of the school. Additionally, I created and manage 
                the administrative website, which allows school staff to easily update and 
                maintain the app's content.
              </p>
              <p className='mt-3'>
                Cianon, on the other hand, has been instrumental in creating the thesis documentation. He is responsible for writing the introduction, conducting 
                the review of related literature (RRL), and other essential sections of the document. 
                Together, we have combined our strengths to bring this innovative project to life. 
                Our collaboration ensures that the app is not only technically sound but also 
                well-documented and thoroughly researched, showcasing our dedication to improving 
                educational tools through cutting-edge technology.
              </p>
            </div>
            <div>
              <img className='imageCreator' src={Cianon} alt="" />
            </div>
         
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
