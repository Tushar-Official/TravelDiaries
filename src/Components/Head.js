import * as React from 'react';
import logo from '../Assests/logo.png'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

import { Link } from 'react-router-dom';

function Head(props) {
  const navigate=useNavigate()

  const handleClick=()=>{
   
    navigate("/signup")
    }
    const handleLogin=()=>{
      sessionStorage.setItem("logined",true)
      navigate("/signin")
    }
    const handleLogout=()=>{
      sessionStorage.clear();
      
      navigate("/")
    }
    
  return (
    <>
    <div className="flex w-full pt-2 px-8 h-20 bg-slate-100 fixed top-0 z-50 ">
    <div className='logo flex justify-center'>
    <div><Link to="/"><img src={logo} className='w-20 h-16 ml-2' alt="/"/></Link></div>
    </div>
    <div className='flex justify-between w-full pt-3'>
    <div className='pages flex justify-evenly'>
    
    <ul className='flex justify-evenly mx-4 cursor-pointer'>
    <Link to="/"><li className='mx-6 font-bold text-lg text-orange-500'>About Us</li></Link>
    <Link to="/"><li className='mx-6 font-bold text-lg text-orange-500'>Home</li></Link>
    {(props.firstpage===true || props.secondPage===true)? null:
    (
      <Link to="firstpageDiary">
        <li className='mx-6 font-bold text-lg text-orange-500'>Create Your First Dairy</li>
      </Link>
      )}
    <li className='mx-6 font-bold text-lg text-orange-500'>Add Your Travel Story</li>
    </ul>
  
    
    </div>
    <div className='signup flex justify-center  mb-4 '>
    {(sessionStorage.getItem("logined")==="true" || props.firstpage===true)?( <>
      <h3 className='mx-6 font-bold text-xl text-orange-500'>{sessionStorage.getItem("Username")}</h3>
      <Button variant="contained" disableElevation className='mx-2 px-8 text-lg bg-orange-600 text-white' style={{
      backgroundColor: 'rgb(234,88,12)', 
      fontSize:'15px',// Change to your desired background color
      '&:hover': {
        backgroundColor: '#007bff', // Change to your desired hover background color
      },
    }} onClick={()=>handleLogin()}>
   DASHBOARD
  </Button>
  <Button variant="contained" disableElevation className='mx-2 px-8 text-lg bg-orange-600 text-white' style={{
    backgroundColor: 'rgb(234,88,12)', 
    fontSize:'15px',// Change to your desired background color
    '&:hover': {
      backgroundColor: '#007bff', // Change to your desired hover background color
    },
  }} onClick={()=>handleLogout()}>
 LogOut
</Button>
  </>
  ):(
    <>
    <Button variant="contained" disableElevation className='mx-2 px-8 text-lg bg-orange-600 text-white' style={{
      backgroundColor: 'rgb(234,88,12)', 
      fontSize:'15px',// Change to your desired background color
      '&:hover': {
        backgroundColor: '#007bff', // Change to your desired hover background color
      },
    }} onClick={()=>handleLogin()}>
   SIGNIN
  </Button>
    
    <Button variant="contained" disableElevation className='mx-2 px-8 text-lg bg-orange-600 text-white' style={{
      backgroundColor: 'rgb(234,88,12)', 
      fontSize:'15px',// Change to your desired background color
      '&:hover': {
        backgroundColor: '#007bff', // Change to your desired hover background color
      },
    }} onClick={()=>handleClick()}>
   SIGNUP
  </Button>
  </>
  )}
    </div>
    </div>
    </div>
    </>
  )
}

export default Head