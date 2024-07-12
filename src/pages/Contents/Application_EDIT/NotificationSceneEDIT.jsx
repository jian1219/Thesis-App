import React, { useEffect, useState } from 'react'
import { db, storage } from "../../../config/firebase_config"
import { doc, deleteDoc, addDoc, getDocs, collection } from 'firebase/firestore'
import { Timestamp } from 'firebase/firestore';

import "../../../Css/sceneNoti.css"

import NotificationIcon from "../../../Images/notification (1).png"

function NotificationSceneEDIT() {

  const notificationContentCollectionRef = collection(db, "notificationcontent")
  const [notificationContentData, setNotificationContentData] = useState([])
  const [showDiv, setShowDiv] = useState(false);

  const [description, setDescription] = useState("")

  useEffect(() => {
    const getNotificationContents = async () => {
      const data = await getDocs(notificationContentCollectionRef)
      setNotificationContentData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getNotificationContents();
  }, []);

  const handleClick = async () => {
    const valRef = collection(db, 'notificationcontent');
    await addDoc(valRef, { description: description, date: Timestamp.now() });
    setDescription(""); // Clear the input field after submission
    setShowDiv(false); // Hide the input form after submission
  }

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  console.log(notificationContentData)

  return (
    <div className='px-3 py-3'>
      <div className='mt-2 flex pl-5 items-center borderB'>
        <img src={NotificationIcon} className='w-[40px]' alt="Home Icon"/>
        <p className='ml-3 text-xl font-semibold'>NOTIFICATION EDIT</p>
      </div>
      <div className='notiDiv'>
        <button onClick={toggleDiv} className='notibutton'>ADD Notification</button>
        {showDiv && (
          <div className='hiddenDiv'>
            {/* Content of the hidden div */}
            <div>
              <textarea
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Write your Notification here..."
                  rows="5"
                  cols="100"
                  className='text-black px-2 py-2'
                  value={description}  // Bind the value to state
                />
            </div>
            <div className='submitbuttondiv'>
              <button onClick={handleClick} className='submitbutton'>SUBMIT</button>
            </div>
          </div>
        )}
      </div>
      <div className='border-left'>
        {notificationContentData.map((content) => (
          <div className='notiContent' key={content.id}>
            <p className='text-[10px] border-bot'>{content.date?.toDate().toString()}</p> 
            <p>Notification: {content.description}</p>
          
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationSceneEDIT
