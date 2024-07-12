import { useEffect, useState } from 'react'
import { db } from "../../../config/firebase_config"
import { collection, getDoc, doc } from 'firebase/firestore';
import Room_Detail_EDIT from './Room_Detail_EDIT';

function Room_Detail({ roomId }) {
    const [roomData, setRoomData] = useState(null);
    const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
    const [editRoom, setEditRoom] = useState(null);

    const userCollectionRef = collection(db, "rooms");

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const docRef = doc(userCollectionRef, roomId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setRoomData({ ...docSnap.data(), id: docSnap.id });
                    console.log("Document data:", docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (e) {
                console.error("Error fetching document: ", e);
            }
        };

        fetchRoomData();
    }, [roomId]);

    const handleEditClick = (roomId) => {
        setIsEditPopupVisible(true);
        setEditRoom(roomId);
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
                        <div>SHOW pop up div</div>
                        <h1 className='text-[20px] font-semibold'>{roomData.room_name} Information</h1>
                        <h2 className='mt-2'>Adviser: <span className='ml-3'>{roomData.teacher_name}</span></h2>
                        <p className='w-[900px] mt-2'>Description: <span className='ml-3'>{roomData.description}</span></p>
                    </div>
                ) : (
                    <p className='text-center mt-20'>Click the list Rooms to show data</p>
                )}
            </div>

            {isEditPopupVisible && (
                <div className='fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center pl-[300px]'>
                    <div className='popOUT_edit'>
                        <button
                            className='absolute top-3 right-8 popup_back'
                            onClick={handleClosePopup}
                        >
                            Back
                        </button>
                        <div>
                            <Room_Detail_EDIT editRoomId={editRoom} onClose={handleClosePopup} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Room_Detail;
