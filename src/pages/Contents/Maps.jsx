import React, {useState, useEffect} from 'react';
import "../../Css/Maps.css"

import GoogleMap from './Maps/GoogleMap';
import ModelANHSmap from './Maps/modelANHSmap';

function Maps() {

  const [activeContent, setActiveContent] = useState('googleMaps')
  const [activeButton, setActiveButton] = useState('home')

  const handleNavClick = (content) => {
      setActiveButton(content)
      setActiveContent(content)
  }

  return (
    <div className='mapGrid'>
      <div>
      {activeContent === 'googleMaps' && <GoogleMap />}
      {activeContent === 'modelMap' && <ModelANHSmap />}
      </div>
      <div className=' rounded py-4'>
        <div className='mapNavar'>
          
          <button className={`mapButton ${activeButton === 'googleMaps' && 'mapActiveButton'}`} onClick={() => handleNavClick('googleMaps')}>
            <p className='ml-3'>Google Map</p>
          </button>
          <button className={`mapButton ${activeButton === 'modelMap' && 'mapActiveButton'}`} onClick={() => handleNavClick('modelMap')}>
            <p className='ml-3'>3D Model Map</p>
          </button>
        </div>
        
      </div>

    </div>
  );
}

export default Maps;
