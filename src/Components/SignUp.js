// SignUp.js
import React, { useState } from 'react';
import Head from '../Components/Head';
import { app, provider } from '../Firebase/Firebase';
import { FcGoogle } from 'react-icons/fc'; 
import Button from '@mui/material/Button';

// Import the 'auth' module from the Firebase app instance
import { getAuth, signInWithPopup } from 'firebase/auth';
import Footer from './Footer';
import { useNavigate } from 'react-router';


function SignUp() {
    const navigate=useNavigate()
  const auth = getAuth(app); // Initialize 'auth' with the Firebase app instance
const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // User is signed in with Google account
      console.log(result.user);
    } catch (error) {
      console.error(error.message);
    }
  };
const handleSignIn=()=>{
    sessionStorage.setItem("Username",name)
    sessionStorage.setItem("password",paaswrd)
    sessionStorage.setItem("email",email)
    sessionStorage.setItem("signup",true)
    navigate("/signin")
}
  const [email,setEmail]=useState("")
  const[paaswrd,setpasswrd]=useState("")
  const[name,setName]=useState("")

  return (
    <>
    <div>
    <Head />
  </div>
  {sessionStorage.getItem("signup")==="true"?
  (
    <div className='h-full mt-40'>
    <h3 className='font-semibold text-2xl text-center '>You are already registered<br/> Please click here to 
    <button className='text-blue-600 ' onClick={()=>{navigate("/signin")}}>Login</button></h3></div>
  )
  :
  (
    <>
  <div className='signupmethods grid-grid-col-1 grid-row-2 justify-center h-full mt-24 '>
    <div className='mt-2 grid grid-row-2 grid-col-1 gap-y-2 justify-center '>
      <h2 className='font-medium text-base ml-2'>Sign Up with Google</h2>
      <button onClick={handleGoogleSignIn} 
      className='flex items-center justify-center w-44 h-8 py-2 bg-orange-200 text-sm text-center rounded-lg'>
      <FcGoogle className='w-4 h-4 mr-1' /> Sign Up with Google
    </button>
    </div>
    <h3 className='text-center font-semibold text-base py-4'>OR</h3>
    <div className='signupform '>
      <form className='flex flex-col space-y-4 items-center'>
        <input type="text"  placeholder='Enter Your Username here' value={name}
        className='text-center rounded-lg font-medium border-2 border-slate-600 w-80 h-12' onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Enter Your EmailID' value={email}
        className='text-center rounded-lg font-medium border-2 border-slate-600 w-80 h-12' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="number" placeholder='Enter a Password' value={paaswrd}
        className='text-center rounded-lg font-medium border-2 border-slate-600 w-80 h-12' onChange={(e)=>setpasswrd(e.target.value)}/>
        <Button variant="contained" disableElevation className='mx-2 px-8 text-lg bg-orange-600 text-white' style={{
            backgroundColor: 'rgb(234,88,12)', 
            fontSize:'15px',// Change to your desired background color
            '&:hover': {
              backgroundColor: '#007bff', // Change to your desired hover background color
            },
          }} onClick={()=>handleSignIn()} >
         SUBMIT
        </Button>
      </form>
    </div>
  </div>
  </>
  )}
  <div className=' fixed w-full'><Footer/></div>
    </>
  );
}

export default SignUp;
