import { useEffect, useState } from 'react';
import { db, storage } from "../../../config/firebase_config";
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { collection, getDoc, doc, updateDoc } from 'firebase/firestore';

function Room_Detail_EDIT({ editRoomId, onClose ,contentUpdate }) {
  const [roomData, setRoomData] = useState({ 
    room_name: '', 
    teacher_name: '',  
    position: '',
    subjects: '',
    contact_num: '',
    description: '',
    schedule_monday: '',
    schedule_tuesday: '',
    schedule_wednesday: '',
    schedule_thursday: '',
    schedule_friday: '',
    schedule_saturday: '', 
    schedule_sunday: '',
    profilepic: ''

  });
  const [newRoomName, setNewRoomName] = useState('');
  const [imageRef, setImageRef] = useState("")
  const [newTeacherName, setNewTeacherName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newSubjects, setNewSubjects] = useState('')
  const [newPosition, setNewPosition] = useState('')
  const [newContact, setNewContact] = useState('')
  const [scheduleM, setScheduleM] = useState('')
  const [scheduleT, setScheduleT] = useState('')
  const [scheduleW, setScheduleW] = useState('')
  const [scheduleTh, setScheduleTh] = useState('')
  const [scheduleF, setScheduleF] = useState('')
  const [scheduleSat, setScheduleSat] = useState('')
  const [scheduleSun, setScheduleSun] = useState('')



  const userCollectionRef = collection(db, 'rooms');

  const fetchRoomData = async () => {
    try {
        const docRef = doc(userCollectionRef, editRoomId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setRoomData({ ...data, id: docSnap.id });
            setNewRoomName(data.room_name); 
            setNewTeacherName(data.teacher_name); 
            setNewDescription(data.description);
            setNewContact(data.contact_num);
            setNewSubjects(data.subjects);
            setNewPosition(data.position)

            setScheduleM(data.schedule_monday);
            setScheduleT(data.schedule_tuesday);
            setScheduleW(data.schedule_wednesday);
            setScheduleTh(data.schedule_thursday);
            setScheduleF(data.schedule_friday);
            setScheduleSat(data.schedule_saturday);
            setScheduleSun(data.schedule_sunday);
        } else {
            console.log('No such document!');
        }
    } catch (e) {
        console.error('Error fetching document: ', e);
    }
  };

  useEffect(() => {
      fetchRoomData();
  }, [editRoomId]);

  const handleUpdateImage = (e) => {
    const imageFile = e.target.files[0];

    const imageRef = ref(storage, `profilepic/${v4()}`);
    uploadBytes(imageRef, imageFile).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        setImageRef(url);
        console.log(imageRef)
      }).catch(error => {
        console.error("Error getting download URL: ", error);
      });
    }).catch(error => {
      console.error("Error uploading image: ", error);
    });
  }

  const handleInputChange = (event) => {
      setNewRoomName(event.target.value);
  };

  const handleTeacherNameChange = (event) => {
      setNewTeacherName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
      setNewDescription(event.target.value);
  };

  const handleSubjectsChange = (event) => {
    setNewSubjects(event.target.value);
  };

  const handlePositionChange = (event) => {
    setNewPosition(event.target.value);
  };

  const handleContactChange = (event) => {
    setNewContact(event.target.value);
  };

  const handleScheduleMChange = (event) => {
    setScheduleM(event.target.value);
  };

  const handleScheduleTChange = (event) => {
    setScheduleT(event.target.value);
  };

  const handleScheduleWChange = (event) => {
    setScheduleW(event.target.value);
  };
  const handleScheduleThChange = (event) => {
    setScheduleTh(event.target.value);
  };

  const handleScheduleFChange = (event) => {
    setScheduleF(event.target.value);
  };

  const handleScheduleSatChange = (event) => {
    setScheduleSat(event.target.value);
  };

  const handleScheduleSunChange = (event) => {
    setScheduleSun(event.target.value);
  };




  const submitUpdateClick = async () => {
      try {
          const roomDocRef = doc(userCollectionRef, editRoomId);
          await updateDoc(roomDocRef, {
              room_name: newRoomName,
              teacher_name: newTeacherName,
              description: newDescription,
              position: newPosition,
              subjects: newSubjects,
              contact_num: newContact,
              description: newDescription,
              schedule_monday: scheduleM,
              schedule_tuesday: scheduleT,
              schedule_wednesday: scheduleW,
              schedule_thursday: scheduleTh,
              schedule_friday: scheduleF,
              schedule_saturday: scheduleSat,
              schedule_sunday: scheduleSun,
              profilepic: imageRef
          });
          console.log('Document successfully updated!');
          onClose();
          contentUpdate()
      } catch (e) {
          console.error('Error updating document: ', e);
      }
  };

  return (
      <div>
          <div className='px-4 py-3'>
              {roomData ? (
                  <div className='relative'>
                      <h1 className='text-[20px] font-semibold'>{roomData.room_name} Updating the Information</h1>

                      <div className='edit-left-right-img'>
                        <div>
                          <div className='room_edit_grid mt-5'>
                            <h2>Room Name:</h2>
                            <input
                                type="text"
                                placeholder='room name...'
                                className='room_edit_input'
                                value={newRoomName}
                                onChange={handleInputChange}
                            />
                          </div>
                          <div className='room_edit_grid mt-2'>
                            <h2>Teacher Name:</h2>
                            <input
                                type="text"
                                placeholder='teacher name...'
                                className='room_edit_input'
                                value={newTeacherName}
                                onChange={handleTeacherNameChange}
                            />
                          </div>
                          <div className='room_edit_grid mt-2'>
                            <h2>Position:</h2>
                            <input
                                type="text"
                                placeholder='Position...'
                                className='room_edit_input'
                                value={newPosition}
                                onChange={handlePositionChange}
                            />
                          </div>
                          <div className='room_edit_grid mt-2'>
                            <h2>Subjects:</h2>
                            <input
                                type="text"
                                placeholder='Subjects...'
                                className='room_edit_input' 
                                value={newSubjects}
                                onChange={handleSubjectsChange}
                            />
                          </div>
                          <div className='room_edit_grid mt-2'>
                            <h2>Contact #:</h2>
                            <input
                                type="text"
                                placeholder='Contact #...'
                                className='room_edit_input'
                                value={newContact}
                                onChange={handleContactChange}
                            />
                          </div>
                        </div>
                        <div className='image-profile-update'>
                          <img className='room-profile-pic' src={roomData.profilepic} alt="" />
                          <div>
                            <input className='file-update' type="file" onChange={handleUpdateImage} />
                          </div>
                        
                        </div>
                      </div>
                      <div className='room_edit_grid mt-2'>
                          <h2>Description:</h2>
                          <textarea
                              onChange={handleDescriptionChange}
                              placeholder='description...'
                              rows="7"
                              cols="52"
                              className='room_edit_input'
                              value={newDescription}
                          />
                      </div>

                      <div className='schedule-edit-div'> 
                        <h1 className='text-center text-xl'>Schedule</h1>

                        <div className='schedule-edit-row'>
                          <p className='w-[150px]'>Monday</p>
                          <input
                              type="text"
                              placeholder='Monday Schedule...'
                              className='roomSchedule_edit_input'
                              value={scheduleM}
                              onChange={handleScheduleMChange}
                          />
                        </div>
                        <div className='schedule-edit-row'>
                          <p className='w-[150px]'>Tuesday</p>
                          <input
                              type="text"
                              placeholder='Tuesday Schedule...'
                              className='roomSchedule_edit_input'
                              value={scheduleT}
                              onChange={handleScheduleTChange}
                          />
                        </div>
                        <div className='schedule-edit-row'>
                          <p className='w-[150px]'>Wednesday</p>
                          <input
                              type="text"
                              placeholder='Wednesday Schedule...'
                              className='roomSchedule_edit_input'
                              value={scheduleW}
                              onChange={handleScheduleWChange}
                          />
                        </div>
                        <div className='schedule-edit-row'>
                          <p className='w-[150px]'>Thursday</p>
                          <input
                              type="text"
                              placeholder='Thursday Schedule...'
                              className='roomSchedule_edit_input'
                              value={scheduleTh}
                              onChange={handleScheduleThChange}
                          />
                        </div>
                        <div className='schedule-edit-row'>
                          <p className='w-[150px]'>Friday</p>
                          <input
                              type="text"
                              placeholder='Friday Schedule...'
                              className='roomSchedule_edit_input'
                              value={scheduleF}
                              onChange={handleScheduleFChange}
                          />
                        </div>
                        <div className='schedule-edit-row'>
                          <p className='w-[150px]'>Saturday</p>
                          <input
                              type="text"
                              placeholder='Saturday Schedule...'
                              className='roomSchedule_edit_input'
                              value={scheduleSat}
                              onChange={handleScheduleSatChange}
                          />
                        </div>
                        <div className='schedule-edit-row'>
                          <p className='w-[150px]'>Sunday</p>
                          <input
                              type="text"
                              placeholder='Sunday Schedule...'
                              className='roomSchedule_edit_input'
                              value={scheduleSun}
                              onChange={handleScheduleSunChange}
                          />
                        </div>
                      </div>

                      <div className='submit-button-div'>
                        <button onClick={submitUpdateClick} className='room_update_button'>
                            Update
                        </button>
                      </div>
                     
                  </div>
              ) : (
                  <p className='text-center mt-20'>Loading....</p>
              )}
          </div>
      </div>
  );
}

export default Room_Detail_EDIT;
