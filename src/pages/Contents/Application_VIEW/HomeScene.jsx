import { useState, useEffect } from 'react'

import { doc, getDocs, collection } from 'firebase/firestore'
import { db } from "../../../config/firebase_config"

import logo from "../../../Images/anhs_logo-removebg-preview.png"

function HomeScene({ homeUpdated }) {

  const homeContentCollectionRef = collection(db, "homecontent")
  const [homeContentData, setHomeContentData] = useState([])

  const getHomeContents = async () => {
    const data = await getDocs(homeContentCollectionRef)
    setHomeContentData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };

  useEffect(() => {
    getHomeContents();
  }, []);

  useEffect(() => {
    if (homeUpdated) {
      getHomeContents();
    }
  }, [homeUpdated]);


  return (
    <div className='applicationLiveContainer'>
      <div className='livehomeAppHeader'>
        <img className='w-[40px]' src={logo} alt="" />
        <p className='livehomeAppHeaderP'>AGUSAN NATIONAL HIGH SCHOOL</p>
      </div>

      {homeContentData.map((content) => (
          <div className='mt-4 liveHomeSceneApp px-2' key={content.id}> 
            <div className='homeAppLiveBorderB'>
              <img className='rounded-sm' src={content.imageRef} alt="" srcset="" />
              <h1 className='font-bold'>{content.title}</h1>
              <h2 className='text-[12px]'>{content.description}</h2>
            </div>
            
          </div>
        ))}

    </div>
  )
}

export default HomeScene
