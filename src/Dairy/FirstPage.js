import React from 'react'
import Head from '../Components/Head'
import plus from '../Assests/plus.png'

import { useNavigate } from 'react-router'

function FirstPage() {
    const navigate=useNavigate()
   
    const handleSwitch=()=>{
        
        navigate(`/secondPageDiary`)
    }
  return (
    <>
    <div>
    <Head FirstPage={true}/>
    </div>
    <div className='adding flex justify-center mt-44 w-1/2'>
    <button onClick={()=>handleSwitch()}><img src={plus} alt="/" className='w-72 h-72'/></button>


    
    </div>
    </>
  )
}

export default FirstPage