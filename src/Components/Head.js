import * as React from 'react';
import logo from '../Assests/logo.png'
import Button from '@mui/material/Button';

function Head() {
  return (
    <>
    <div className="flex w-full pt-2 px-8 h-20 bg-slate-100 fixed top-0 z-50 ">
    <div className='logo flex justify-center'>
    <div><img src={logo} className='w-20 h-16' alt="/"/></div>
    </div>
    <div className='flex justify-between w-full pt-3'>
    <div className='pages flex justify-evenly'>
    
    <ul className='flex justify-evenly mx-4 cursor-pointer'>
    <li className='mx-6 font-bold text-lg text-orange-500'>About</li>
    <li className='mx-6 font-bold text-lg text-orange-500'>Home</li>
    <li className='mx-6 font-bold text-lg text-orange-500'>Create Your First Dairy</li>
    <li className='mx-6 font-bold text-lg text-orange-500'>Add Your Travel Story</li>
    </ul>
  
    
    </div>
    <div className='signup '>
    
    <Button variant="contained" disableElevation className='mx-2 px-8 text-lg bg-orange-600 text-white' style={{
      backgroundColor: 'rgb(234,88,12)', 
      fontSize:'15px',// Change to your desired background color
      '&:hover': {
        backgroundColor: '#007bff', // Change to your desired hover background color
      },
    }}>
   SIGNUP
  </Button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Head