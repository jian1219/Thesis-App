import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../Css/Login.css"

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    console.log(username, password)


    const handleSubmit = (e) => {
        e.preventDefault();


    }



  return (
    <div className='background'>
        <div className='text-center pt-10'>
            <h1 className='text-white text-4xl'>CAMPUSNAVAR</h1>
            <div className='border'>
                <h2 className='text-xl font-semibold'>ADMIN LOGIN</h2>


                <form className=' mt-10 px-6' onSubmit={handleSubmit}>
                        <input 
                            id='username'
                            className='input'
                            type="text" 
                            placeholder='E.g. Shovy@email.com'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required

                        />
                        <div>
                            <input 
                                id='password'
                                className='input'
                                type="password" 
                                placeholder='Enter your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        

                        <Link to='/Dashboard'><button className='text-white text-lg bg-black mt-5 py-2 rounded-md w-[400px]'>Login</button></Link>
                       
                    </form>


            </div>
        </div>
    </div>
  )
}

export default Login
