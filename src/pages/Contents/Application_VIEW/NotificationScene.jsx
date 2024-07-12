import React, { useEffect, useState } from 'react'
import { doc, getDocs, collection } from 'firebase/firestore'
import { db } from "../../../config/firebase_config"

import logo from "../../../Images/anhs_logo-removebg-preview.png"

function NotificationScene() {

  const notificationContentCollectionRef = collection(db, "notificationcontent")
  const [notificationContentData, setNotificationContentData] = useState([])

  useEffect(() => {
    const getNotificationContents = async () => {
      const data = await getDocs(notificationContentCollectionRef)
      setNotificationContentData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getNotificationContents();
  }, []);

  return (
    <div>
       <div className='livehomeAppHeader'>
        <img className='w-[40px]' src={logo} alt="" />
        <p className='livehomeAppHeaderP'>AGUSAN NATIONAL HIGH SCHOOL</p>
      </div>

      <div className='border-left-scene paddingnoti-scene'>
        {notificationContentData.map((content) => (
          <div className='notiContent-scene' key={content.id}>
            <p className='text-[10px] border-bot'>{content.date?.toDate().toString()}</p> 
            <p>Notification: {content.description}</p>
          
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationScene
