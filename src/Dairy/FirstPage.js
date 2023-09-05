import React from 'react'
import Head from '../Components/Head'
import plus from '../Assests/plus.png'

function FirstPage() {
  return (
    <>
    <div>
    <Head firstpage={true}/>
    </div>
    <div className='adding flex justify-center mt-44 w-1/2'>
    <button><img src={plus} alt="/" className='w-72 h-72'/></button>


    
    </div>
    </>
  )
}

export default FirstPage