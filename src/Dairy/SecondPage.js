import React,{useState} from 'react'
import Head from '../Components/Head'
import {BsCircle} from 'react-icons/bs'
import TextField from '@mui/material/TextField';
// import './Style.css'

function SecondPage() {
  const [usertitle,setUsertitle]=useState("")
  const [count,setCount]=useState(0)
    const title=["Add Your Title","Add Your Cover Photo","Review and Start writing Your diary"]
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0]; // Get the first selected file
      setSelectedFile(file);
    };
    console.log(count)
  const handleNext=()=>{
    if(count>=3){

    }
    else{
      setCount(count+1)
    }
    
  }
   
  return (
   <>
   <div>
    <Head secondPage={true} />
   </div>
   <div className='timeline mt-40 flex justify-evenly items-center'>
  <div className='firstcircle relative grid rid-col-1 grid-row-2 justify-center'>
    <div className='flex justify-center'><BsCircle
    className={`bg-orange-600 rounded-full cursor-pointer w-8 h-8 ${count === 1 ? 'bg-green-600' : ''}`}
    onClick={() => setCount(1)}
  /></div>
    <p className='text-center font-semibold text-xs'>{title[0]}</p>
  </div>
  
  <div className='secondcircle relative'>
  <div className='flex justify-center'><BsCircle 
  className={`bg-orange-600 rounded-full cursor-pointer w-8 h-8 ${count === 2 ? 'bg-green-600' : ''}`}
  onClick={()=>setCount(2)} 
   /></div>
    <p className='text-center font-semibold text-xs'>{title[1]}</p>
  </div>
  
  <div className='thirdcircle relative'>
  <div className='flex justify-center'><BsCircle 
  className={`bg-orange-600 rounded-full cursor-pointer w-8 h-8 ${count === 3 ? 'bg-green-600' : ''}`}
  onClick={()=>setCount(3)} 
   /></div>
    <p className='text-center font-semibold text-xs'>{title[2]}</p>
  </div>
</div>
<div className='clickContent flex flex-col justify-center items-center mt-20 space-y-4 h-36'>
{count===1?(
  <div className='title'>
    <div className='content'>
    <TextField
        label="Username"
        variant="outlined" 
        fullWidth
        inputProps={{ required: true }}
        value={usertitle}
        onChange={(e)=>setUsertitle(e.target.value)}

        // Add other props and event handlers as needed
      />
    </div>
    </div>

):null}
    {count===2?(
      <div className='photos'>
      <input
      type="file"
      accept="image/*" // Specify the accepted file types (e.g., images)
      onChange={handleFileChange}
    />
    {selectedFile && (
      <div>
        <p>Selected File: {selectedFile.name}</p>
        <img
          src={URL.createObjectURL(selectedFile)}
          alt={selectedFile.name}
          width="200"
        />
      </div>
    )}
      
      </div>

    ):null}
   
    {count===3?(
      <div className='review'>
      <h3 className='text-lg font-semibold'>{usertitle}</h3>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt={selectedFile.name}
            width="200"
          />
        </div>
      )}
    </div>


    ):null}
    
    </div>
    <div className='mt-8 flex justify-evenly items-center'>
    {count>=2?(
      <button className='bg-orange-600 text-white w-32 text-lg font-semibold h-12 rounded-xl'onClick={()=>setCount(count-1)} >Back</button>
    ):null}
    
    <button className='bg-orange-600 text-white w-32 text-lg font-semibold h-12 rounded-xl' onClick={()=>handleNext()}>Next</button></div>


   </>
  )
}

export default SecondPage