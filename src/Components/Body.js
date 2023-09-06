import React from 'react';
import { useState } from 'react';
import scene1 from '../Assests/TRAVE.png'
import scene2 from '../Assests/beauty.png'
import scene3 from '../Assests/scene2.png'
import Carousel from 'react-bootstrap/Carousel';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


function MyCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    
    return (
        <>
        <div className='mt-20 flex flex-wrap justify-center h-full items-center w-full'>
       
       <div className="carousel">
       <Carousel activeIndex={index} onSelect={handleSelect}>
       <Carousel.Item>
         <img src={scene2} className='w-full' alt='Travel ' />
       </Carousel.Item>
       <Carousel.Item>
         <img src={scene1} className='w-full' alt='Travel' />
       </Carousel.Item>
       <Carousel.Item>
         <img src={scene3} className='w-full' alt='Travel' />
       </Carousel.Item>
     </Carousel>
     </div>
       
       
      <div className='about h-44 relative w-full text-center mx-4 p-12'>
      <h3 className='text-4xl font-bold text-center mb-4'>About Us</h3>
    <p className='text-gray-600 font-normal text-left'>
    Welcome to our travel story platform, where adventures and experiences become a source of inspiration and lasting memories. Our mission is to provide a space for travelers like you to share your travel stories, create digital travel diaries, and connect with a community of fellow adventurers. Here's what you can expect from our platform:
    <br/>
   <br/> <strong>Share Your Travel Stories:</strong> Our platform allows you to share your travel stories with the world. Whether it's a thrilling backpacking adventure, a cultural exploration, or a simple weekend getaway, your stories matter to us.

   <br/> <strong>Create Your Travel Diary:</strong> We provide you with a user-friendly tool to create and maintain your digital travel diary. Document your journey with text, photos, and even videos. Capture the essence of your trips in one place for easy access and reminiscing.

   <br/> <strong>Inspire Others:</strong> Your travel stories can inspire and motivate others to explore the world. We believe that every journey holds valuable lessons, and your experiences can be a source of encouragement for fellow travelers.

   <br/><strong>A Free Platform:</strong> We are committed to making our platform accessible to everyone. All the features we offer are completely free of charge. There are no hidden fees or premium subscriptions. We believe that sharing your travel adventures should be accessible to all.

   <br/><strong>Data Security Guarantee:</strong> We prioritize the security of your data. Rest assured that your personal information and travel stories are protected with state-of-the-art security measures. We do not share your data with third parties, and your privacy is our utmost concern.

   <br/> <strong>Join Our Community:</strong> Connect with like-minded travelers from around the globe. Share your experiences, seek advice, and build a network of friends who share your passion for exploration.

    At our travel story platform, we celebrate the diversity of travel experiences. Whether you're an avid globetrotter or embarking on your first adventure, your stories are welcome here. Start sharing, inspiring, and creating memories that will last a lifetime.

    Join us today and become a part of our vibrant travel community. Your journey begins here!
  </p>
</div>
<div className='grid grid-col-1 justify-center grid-row-2 gap-y-3 mt-96 '>
<Link to="firstpageDiary">
<Button variant="contained" className='w-96 h-16' style={{
    backgroundColor:'rgb(37,99,235)',
    color:'white',
    fontSize:'20px',
    fontWeight:'20px',
    fontStyle:'semibold',
    '&:hover': {
        backgroundColor: 'rgb(30,58,138)', 
        
      },
}}>Create Your First Diary</Button></Link>

<Button variant="contained" className='w-96 h-16 text-lg' style={{
    backgroundColor:'rgb(22,163,74)',
    color:'white',
    fontSize:'20px',
    fontWeight:'20px',
    fontStyle:'semibold',
    '&:hover': {
        backgroundColor: 'rgb(30,58,138)', 
        // Change to your desired hover background color
      },
}}>  Add Your Travel Story</Button>


</div>


      </div>
</> 
    );
  }
     export default MyCarousel  