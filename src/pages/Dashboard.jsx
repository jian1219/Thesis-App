import React, { useState } from 'react'
import "../Css/Dashboard.css"

import Home from "../pages/Contents/Home"
import Info from "../pages/Contents/Info"
import User from "../pages/Contents/User"
import Profile from './Contents/Profile'
import More from './Contents/More'
import Maps from './Contents/Maps'
import Rooms from './Contents/Rooms'


function Dashboard() {

    const [activeContent, setActiveContent] = useState('home')
    const [activeButton, setActiveButton] = useState('home')

    const handleNavClick = (content) => {
        setActiveButton(content)
        setActiveContent(content)
    }

  return (
    <div className='background'>

        <div className='header text-white'>
          <h1 className='text-xl font-semibold shadow-sm'>CAMPUSNAVBAR - ADMIN</h1>
        </div>

        <div className='content text-white'>
          <div className='navigation'>
            

            <div className='grid px-4 mt-20'>
              <button className={`navButton ${activeButton === 'home' && 'activeButton'}`} onClick={() => handleNavClick('home')}>
                <p className='ml-3'>Home</p>
              </button>
              <button className={`navButton ${activeButton === 'maps' && 'activeButton'}`} onClick={() => handleNavClick('maps')}>
                <p className='ml-3'>Maps</p>
              </button>
              <button className={`navButton ${activeButton === 'rooms' && 'activeButton'}`} onClick={() => handleNavClick('rooms')}>
                <p className='ml-3'>Rooms</p>
              </button>
              <button className={`navButton ${activeButton === 'info' && 'activeButton'}`} onClick={() => handleNavClick('info')}>
                <p className='ml-3'>MOBILE VIEW</p>
              </button>
              <button className={`navButton ${activeButton === 'user' && 'activeButton'}`} onClick={() => handleNavClick('user')}>
                <p className='ml-3'>Users</p>
              </button>
              <button className={`navButton ${activeButton === 'more' && 'activeButton'}`} onClick={() => handleNavClick('more')}>
                <p className='ml-3'>More</p>
              </button>
              
            </div>
          </div>

          <div className='content-area pt-6'>
           
            <div>
              {activeContent === 'home' && <Home />}
              {activeContent === 'info' && <Info />}
              {activeContent === 'user' && <User />}
              {activeContent === 'more' && <More />}
              {activeContent === 'maps' && <Maps />}
              {activeContent === 'rooms' && <Rooms />}
            </div>
            <div className='footer'>
              <h1>THESIS PROJECT</h1>
            </div>
          </div>
        </div>
    </div>  
  )
}

export default Dashboard
