import React, { useEffect, useState } from 'react'
import "../../../Css/sceneHome.css"
import { db, storage } from "../../../config/firebase_config"
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { doc, deleteDoc, addDoc, getDocs, collection } from 'firebase/firestore'

//icons
import HomeIcon from "../../../Images/home (1).png"

function HomeSceneEDIT( {updateContent} ) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageRef, setImageRef] = useState("")
  const [isUploading, setIsUploading] = useState(false)  // State to track upload status
  const [isSubmitting, setIsSubmitting] = useState(false) // State to track submission status

  const homeContentCollectionRef = collection(db, "homecontent")
  const [homeContentData, setHomeContentData] = useState([])

  const getHomeContents = async () => {
    const data = await getDocs(homeContentCollectionRef)
    setHomeContentData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };

  useEffect(() => {
    getHomeContents();
  }, []);

  const deleteContent = () => {
    getHomeContents();
  }

  const deleteHomeContent = async (id) => {
    const userDoc = doc(db, "homecontent", id);
    await deleteDoc(userDoc);
    updateContent();
    deleteContent();
  };

  console.log(homeContentData)

  const handleUpload = (e) => {
    setIsUploading(true);  // Start upload
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    const imageRef = ref(storage, `Images/${v4()}`);
    uploadBytes(imageRef, imageFile).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        setImageRef(url);
        setIsUploading(false);  // End upload
      }).catch(error => {
        console.error("Error getting download URL: ", error);
        setIsUploading(false);
      });
    }).catch(error => {
      console.error("Error uploading image: ", error);
      setIsUploading(false);
    });
  }

  const handleClick = async () => {
    if (isUploading || !imageRef) {
      alert("Please wait until the image is uploaded before adding content.");
      return;
    }
    setIsSubmitting(true);
    try {
      const valRef = collection(db, 'homecontent');
      await addDoc(valRef, { title: title, description: description, imageRef: imageRef });
      alert("Data added successfully");
      // Clear input fields after successful submission
      setTitle("");
      setDescription("");
      setImageRef("");
      updateContent();
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className='px-3 py-3'>
      <div className='mt-2 flex pl-5 items-center borderB'>
        <img src={HomeIcon} className='w-[40px]' alt="Home Icon"/>
        <p className='ml-3 text-xl font-semibold'>HOME EDIT</p>
      </div>

      <div className='gridhomeScene'>
        <div className=''>
          <h1 className='headerbg mt-3'>Create New Content</h1>
          <div>
            <div className='mt-2'>
              <p className='text-lg text-black'>Title:</p>
              <input 
                type="text" 
                placeholder='Input Title...' 
                className='inputHomescene' 
                value={title}  // Bind the value to state
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className='mt-2'>
              <p className='text-lg text-black'>Description:</p>
              <textarea
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Write your description here..."
                rows="6"
                cols="52"
                className='text-black px-2 py-2'
                value={description}  // Bind the value to state
              />
            </div>
            <div className='mt-2'>
              <p className='text-lg text-black'>Upload Image:</p>
              <input
                type="file" 
                onChange={handleUpload}
              />
            </div>
            <div className='text-center mt-6'>
              <button 
                onClick={handleClick} 
                className='buttonHomeScene' 
                disabled={isSubmitting || !title || !description || !imageRef}>
                {isSubmitting ? "Submitting..." : "ADD CONTENT"}
              </button>
            </div>
          </div>
        </div>
        <div className='contentUploadedHomeScene ml-3 px-4 '>
          <h1 className='text-center text-xl mt-3'>Content Uploaded</h1>

          {homeContentData.map((content) => (
          <div className='mt-4 uploadedDataContent' key={content.id}>  {/* Added key prop here */}
            <h1>Title: {content.title}</h1>
            <h2>Description: {content.description}</h2>
            <img className='w-[100px]' src={content.imageRef} alt="" srcset="" />
            <button className='deleteButton' onClick={() => deleteHomeContent(content.id)}>Delete</button>
          </div>
        ))}

        </div>
      </div>
    </div>
  )
}

export default HomeSceneEDIT
