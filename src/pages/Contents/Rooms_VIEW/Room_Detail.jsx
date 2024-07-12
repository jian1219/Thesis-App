import { useEffect, useState } from 'react'
import { db } from "../../../config/firebase_config"
import { collection, getDoc, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import Room_Detail_EDIT from './Room_Detail_EDIT';

function Room_Detail({ roomId }) {

  const [roomData, setRoomData] = useState(null);
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [editRoom, setEditRoom] = useState(null)

  const userCollectionRef = collection(db, "rooms")

  const fetchRoomData = async () => {
    try {
      const docRef = doc(userCollectionRef, roomId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRoomData({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("No such document!");
      }
    } catch (e) {
     
    }

  };

  useEffect(() => {
    fetchRoomData();
  }, [roomId]);

  const updateContent = () => {
    fetchRoomData();
  }

  const handleEditClick = (roomId) => {
    setIsEditPopupVisible(true);
    setEditRoom(roomId)
  };

  const handleClosePopup = () => {
    setIsEditPopupVisible(false);
  };


  return (
    <div className='pt-2'>

      <div>
        {roomData ? (
          <div className='relative'>
            <button
              className='absolute right-20 room_edit_button'
              onClick={() => handleEditClick(roomData.id)}
            >
              EDIT
            </button>
            <h1 className='text-[20px] font-semibold'>{roomData.room_name} Information</h1>
            <div className='room-detail-grid pt-4'>
              <div className='room-right-border h-[500px]'>
                <div className='flex items-center'>
                  <img className='room-profile-pic' src={roomData.profilepic} alt="" />
                  <div className='ml-6'>
                    <h2 className='text-lg flex'><p className='w-[100px]'>Name:</p> <p>{roomData.teacher_name}</p></h2>
                    <h2 className='text-lg flex'><p className='w-[100px]'>Position:</p> <p>{roomData.position}</p></h2>
                    <h2 className='text-lg flex'><p className='w-[100px]'>Subjects:</p> <p>{roomData.subjects}</p></h2>
                    <h2 className='text-lg flex'><p className='w-[100px]'>Contact:</p> <p>{roomData.contact_num}</p></h2>
                  </div>
                </div>
                <p className='mt-5 font-medium'>Description: </p>
                <p className='mt-2 ml-2 mr-2'>{roomData.description}</p>
              </div>
              <div className='pt-4 border-design-right'>
                <h1 className='text-center text-xl'>Schedule</h1>
                <div>
                  <div className='schedule-div'>
                    <h2 className='schedule-days'>Monday</h2>
                    <p className='schedule-content'>{roomData.schedule_monday}</p>
                  </div>
                  <div className='schedule-div'>
                    <h2 className='schedule-days'>Tuesday</h2>
                    <p className='schedule-content'>{roomData.schedule_tuesday}</p>
                  </div>
                  <div className='schedule-div'>
                    <h2 className='schedule-days'>Wednesday</h2>
                    <p className='schedule-content'>{roomData.schedule_wednesday}</p>
                  </div>
                  <div className='schedule-div'>
                    <h2 className='schedule-days'>Thursday</h2>
                    <p className='schedule-content'>{roomData.schedule_thursday}</p>
                  </div>
                  <div className='schedule-div'>
                    <h2 className='schedule-days'>Friday</h2>
                    <p className='schedule-content'>{roomData.schedule_friday}</p>
                  </div>
                  <div className='schedule-div'>
                    <h2 className='schedule-days'>Saturday</h2>
                    <p className='schedule-content'>{roomData.schedule_saturday}</p>
                  </div>
                  <div className='schedule-div'>
                    <h2 className='schedule-days'>Sunday</h2>
                    <p className='schedule-content'>{roomData.schedule_sunday}</p>
                  </div>
                </div>

              </div>
            </div>
            

           
          </div>
        ) : (
          <p className='text-center mt-20'>Click the list Rooms to show data</p>
        )}

      </div>

      {isEditPopupVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center pl-[300px]'>
          <div className='popOUT_edit' >
            <div className='flex justify-end'>
              <button className='back-button-update' onClick={handleClosePopup}>Back</button>
            </div>
  
            <div>
              <Room_Detail_EDIT editRoomId={roomId} onClose={handleClosePopup} contentUpdate={updateContent} />
            </div>
          
         
          </div>
        </div>
      )}
    </div>
  )
}

export default Room_Detail
