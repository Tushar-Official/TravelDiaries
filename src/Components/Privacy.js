import React from 'react';
import '../Dairy/Style.css'
import Footer from './Footer';
function PrivacyPolicy() {
  return (
    <>
    <div className='h-44 relative w-full flex-col justify-center items-center text-center mx-4 p- min-h-screen'>
      <h1 className='font-bold text-center text-lg my-8'>Privacy Policy</h1>
      <p>
        Effective Date: 09.09.2023
      </p>

      <p>
        Welcome to our travel story platform, where adventures and experiences become a source of inspiration and lasting memories. Our mission is to provide a space for travelers like you to share your travel stories, create digital travel diaries, and connect with a community of fellow adventurers. Here's what you can expect from our platform:
      </p>

      <p>
        Share Your Travel Stories: Our platform allows you to share your travel stories with the world. Whether it's a thrilling backpacking adventure, a cultural exploration, or a simple weekend getaway, your stories matter to us.
      </p>

      <p>
        Create Your Travel Diary: We provide you with a user-friendly tool to create and maintain your digital travel diary. Document your journey with text, photos, and even videos. Capture the essence of your trips in one place for easy access and reminiscing.
      </p>

      <p>
        Inspire Others: Your travel stories can inspire and motivate others to explore the world. We believe that every journey holds valuable lessons, and your experiences can be a source of encouragement for fellow travelers.
      </p>

      <p>
        A Free Platform: We are committed to making our platform accessible to everyone. All the features we offer are completely free of charge. There are no hidden fees or premium subscriptions. We believe that sharing your travel adventures should be accessible to all.
      </p>

      <p>
        Data Security Guarantee: We prioritize the security of your data. Rest assured that your personal information and travel stories are protected with state-of-the-art security measures. We do not share your data with third parties, and your privacy is our utmost concern.
      </p>

      <p>
        Join Our Community: Connect with like-minded travelers from around the globe. Share your experiences, seek advice, and build a network of friends who share your passion for exploration. At our travel story platform, we celebrate the diversity of travel experiences. Whether you're an avid globetrotter or embarking on your first adventure, your stories are welcome here. Start sharing, inspiring, and creating memories that will last a lifetime. Join us today and become a part of our vibrant travel community. Your journey begins here!
      </p>

    </div>
    <div className=' text-center'>
    <Footer/>
    </div>
    </>
  );
}

export default PrivacyPolicy;
