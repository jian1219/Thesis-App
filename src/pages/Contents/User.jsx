import { useEffect, useState } from 'react'
import { db } from "../../config/firebase_config"
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import "../../Css/User.css"
import UserIcon from "../../Images/user (2).png"

function User() {


  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState("")
  const userCollectionRef = collection(db, "users")


  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setUserCount(data.docs.length);
    };

    getUsers();
  }, []);

  console.log(userCount)

  return (
    <div>
      <div className='ml-6 text-xl'>
        <p>Total Users: {userCount}</p>
      </div>
      <div className='userContainer'>
        {users.map((user) => (
          <div className='mt-4 userDiv' key={user.id}>  {/* Added key prop here */}
            <div className='flex items-center'>
              <img className='userIcon' src={UserIcon} alt="" />
              <h1 className='ml-3 w-[400px]'>Name: {user.name}</h1>
              <h2 className='w-[130px]'>User type: {user.user_type}</h2>
              <h2 className='ml-10'>Date Installed: {user.date_start?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h2>
            </div>

         
            <button className='userDeletebutton' onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
