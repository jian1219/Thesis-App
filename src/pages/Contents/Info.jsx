import React, {useState, useEffect} from 'react'
import "../../Css/Info.css"

import HomeIcon from '../../Images/home (1).png'
import InformationIcon from "../../Images/information (1).png"
import MapIcon from "../../Images/map (1).png"
import NotificationIcon from "../../Images/notification (1).png"
import ARIcon from "../../Images/augmented-reality (1).png"

//view pages
import HomeScene from "../Contents/Application_VIEW/HomeScene"
import InfoScene from "../Contents/Application_VIEW/InfoScene"
import ARscene from "../Contents/Application_VIEW/ARscene"
import MapScene from "../Contents/Application_VIEW/MapScene"
import NotificationScene from "../Contents/Application_VIEW/NotificationScene"

//edit pages

import HomeSceneEDIT from "../Contents/Application_EDIT/HomeSceneEDIT"
import InfoSceneEDIT from "../Contents/Application_EDIT/InfoSceneEDIT"
import ARsceneEDIT from "../Contents/Application_EDIT/ARsceneEDIT"
import MapSceneEDIT from "../Contents/Application_EDIT/MapSceneEDIT"
import NotificationSceneEDIT from "../Contents/Application_EDIT/NotificationSceneEDIT"

function Info() {

  const [activeContent, setActiveContent] = useState('homeScene')
  const [activeButton, setActiveButton] = useState('home')
  const [homeUpdated, setHomeUpdated] = useState(false)

  const handleNavClick = (content) => {
      setActiveButton(content)
      setActiveContent(content)
  }

  const contentUpdate = () => {
    setHomeUpdated(!homeUpdated)
  }


  return (
    <div className='px-10 '>
      <h1 className='text-center text-xl'>Aplication Home SCENE</h1>

      <div className='infoGrid mt-4'>
        <div className='infoPagView'>

          <div className='bg-white m-2 text-black mobile-container'>
            <div>
              {activeContent === 'homeScene' && <HomeScene homeUpdated={homeUpdated} />}
              {activeContent === 'mapScene' && <MapScene />}
              {activeContent === 'arScene' && <ARscene />}
              {activeContent === 'notificationScene' && <NotificationScene />}
              {activeContent === 'infoScene' && <InfoScene />}
            </div>
            <div className='mobile-footer'>
            
              <button onClick={() => handleNavClick('homeScene')} className='mobile-button'><img className='display-mobile-icon' src={HomeIcon}/></button>
              <button onClick={() => handleNavClick('mapScene')} className='mobile-button'><img className='display-mobile-icon' src={MapIcon}/></button>
              <button onClick={() => handleNavClick('arScene')} className='mobile-button'><img className='display-mobile-icon' src={ARIcon}/></button>
              <button onClick={() => handleNavClick('notificationScene')} className='mobile-button'><img className='display-mobile-icon' src={NotificationIcon}/></button>
              <button onClick={() => handleNavClick('infoScene')} className='mobile-button'><img className='display-mobile-icon' src={InformationIcon}/></button>
                
            </div>
          </div>
        </div>
        <div className='infoPageEdit'>
          <div>
            {activeContent === 'homeScene' && <HomeSceneEDIT  updateContent={contentUpdate} />}
            {activeContent === 'mapScene' && <MapSceneEDIT />}
            {activeContent === 'arScene' && <ARsceneEDIT />}
            {activeContent === 'notificationScene' && <NotificationSceneEDIT />}
            {activeContent === 'infoScene' && <InfoSceneEDIT />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
