import React, { useState } from 'react'
import Footer from './Footer'
import Head from '../Components/Head';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
function Sign() {
    const navigate=useNavigate()
    const [username,setuserName]=useState("")
    const[password,setPassword]=useState("")
    const handleData=()=>{
        (sessionStorage.getItem("Username")===username || sessionStorage.getItem("email")===username )
        && sessionStorage.getItem("password")===password?navigate("/"):alert("credientals did not match")  
        sessionStorage.setItem("logined",true)
    }
  return (
    <>
    <div>
    <Head />
  </div>
    <div className='signupmethods grid-grid-col-1 grid-row-2 justify-center h-full mt-44'>
    <div className='signupform '>
      <form className='flex flex-col space-y-4 items-center'>
        
        <input type="email" placeholder='Enter Your EmailId or Username' value={username}
        className='text-center rounded-lg font-medium border-2 border-slate-600 w-80 h-12' onChange={(e)=>setuserName(e.target.value)}/>
        <input type="number" placeholder='Enter a Password' value={password}
        className='text-center rounded-lg font-medium border-2 border-slate-600 w-80 h-12' onChange={(e)=>setPassword(e.target.value)}/>
        <Button variant="contained" disableElevation className='mx-2 px-8 text-lg bg-orange-600 text-white' style={{
            backgroundColor: 'rgb(234,88,12)', 
            fontSize:'15px',// Change to your desired background color
            '&:hover': {
              backgroundColor: '#007bff', // Change to your desired hover background color
            },
          }} onClick={()=>handleData()}>
         SUBMIT
        </Button>
      </form>
    </div>
  </div>
  <div className='bottom-0 fixed w-full'><Footer/></div>
    
    </>
  )
}

export default Sign