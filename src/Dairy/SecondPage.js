import React from 'react'
import Head from '../Components/Head'
import {BsCircle} from 'react-icons/bs'

function SecondPage() {
    const title=["Add Your Title","Add Your Photos","Write your Diary"]
  return (
   <>
   <div>
    <Head secondPagePage={true}/>
   </div>
   <div className='timeline mt-40 flex justify-evenly items-center'>
   {title.map((ele, index) => (
    <>
    <div key={index} className='grid grid-row-2 grid-col-1 justify-center'>
      <p className='item-center px-4'><BsCircle /></p>
      <p className='text-center font-medium text-sm'>{ele}</p>
      </div>
      {index === title.length - 1 && (
        <div className='line h-4 bg-orange-500' />
      )}

    </>
  ))}
   </div>
   </>
  )
}

export default SecondPage