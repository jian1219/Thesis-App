import { useEffect, useState } from 'react'
import { db } from "../../config/firebase_config"
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import "../../Css/Rooms.css"

import Room_Detail from './Rooms_VIEW/Room_Detail';

function Rooms() {

    const [rooms, setRooms] = useState([])
    const [roomCount, setRoomCount] = useState(0)
    const userCollectionRef = collection(db, "rooms")

    const [isAddRoomsPopupVisible, setIsAddRoomsPopupVisible] = useState(false);

    const [selectedRoom, setSelectedRoom] = useState(null);

    const getRooms = async () => {
        const data = await getDocs(userCollectionRef)
        const roomsData = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setRooms(roomsData)
        setRoomCount(roomsData.length)
          
      
    };

    useEffect(() => {
        getRooms();
    }, []);

    console.log(rooms)

    const handleAddRoom = async () => {
        await addDoc(userCollectionRef, { room_name: "new room" });
        getRooms();
    }

    const handleRoomClick = (roomId) => {
        setSelectedRoom(roomId);
    };

    const handleAddButton = () => {
        setIsAddRoomsPopupVisible(true)
    }

    const handleAddClose = () => {
        setIsAddRoomsPopupVisible(false)
    }



    return (
        <div className='room_grid'>
            <div className='room_left_list text-center py-2'>
                <h1 className='text-[20px] font-semibold py-2'>List of Rooms</h1>
                <div className='flex px-5 justify-between'>
                    <p>Total: {roomCount}</p>
                    <button onClick={handleAddRoom} className='room-add-button'>ADD ROOM</button>
                </div>
                <div className='mt-5'>
                    {rooms.map(room => (
                        <li key={room.id} onClick={() => handleRoomClick(room.id)} className='room_left_but'>
                            {room.room_name}
                        </li>
                    ))}
                </div>
            </div>
            <div>
                <div>
                   < Room_Detail roomId={selectedRoom} />
                </div>    
                <div>
                {isAddRoomsPopupVisible && (
                        <div className='fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center pl-[300px]'>
                            <div className='popOUT_AddRoom' >
                                <div className='flex justify-end mr-[20px]'>
                                    <button className='addroomDesign' onClick={handleAddClose}>Back</button>
                                </div>
                           
                            </div>
                        </div>
                    )}    
                </div>       
            </div>
        </div>
    )
}

export default Rooms
