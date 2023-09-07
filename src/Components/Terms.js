import React from 'react';
import '../Dairy/Style.css'
import Footer from './Footer';

const TermsOfService = () => {
  return (
    <>
    <div>
    <div className="terms-of-service flex flex-col justify-center min-h-screen">
    <div className='h-44 relative w-full flex-grow text-center mx-4 p-12'>
      <h2 className='font-bold text-center text-lg my-8'>Terms of Service</h2>
      <p>
        Welcome to TravelDiaries, your go-to platform for sharing and exploring travel stories. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our platform.
      </p>
      <h3 className='mt-4'>1. Acceptance of Terms</h3>
      <p>
        By accessing or using the TravelDiaries platform, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
      </p>
      <h3>2. User Content</h3>
      <p>
        a. <strong>Sharing Travel Stories:</strong> TravelDiaries provides a platform for users to share their travel stories with the world. You may post text, photos, videos, and other content related to your travel experiences.
      </p>
      <p>
        b. <strong>Creating Travel Diaries:</strong> Our user-friendly tool allows you to create and maintain digital travel diaries. You can document your journeys with various forms of content for easy access and reminiscing.
      </p>
      <h3>3. Inspiring and Connecting</h3>
      <p>
        a. <strong>Inspiration:</strong> We encourage users to inspire and motivate others through their travel stories. Every journey holds valuable lessons, and your experiences can be a source of encouragement for fellow travelers.
      </p>
      <p>
        b. <strong>Community:</strong> TravelDiaries offers a platform for travelers to connect with like-minded individuals from around the world. Share your experiences, seek advice, and build a network of friends who share your passion for exploration.
      </p>
      <h3>4. Free Platform</h3>
      <p>
        a. <strong>Accessibility:</strong> TravelDiaries is committed to providing a free platform accessible to all users. We do not charge any hidden fees or require premium subscriptions. Sharing your travel adventures should be accessible to everyone.
      </p>
      <h3>5. Data Security and Privacy</h3>
      <p>
        a. <strong>Data Security:</strong> We prioritize the security of your data. Your personal information and travel stories are protected with state-of-the-art security measures.
      </p>
      <p>
        b. <strong>Privacy:</strong> Your privacy is of utmost concern to us. We do not share your data with third parties without your consent.
      </p>
      {/* Add the rest of the terms here */}
      <h3>10. Conclusion</h3>
      <p>
        TravelDiaries provides a space for travelers like you to share, inspire, and connect with others who share your passion for exploration. Your journey begins here!
      </p>
      <p>
        If you have any questions or concerns about these Terms of Service, please contact us at tushar.official0197@gmail.com
      </p>
      <p className='my-4 font-semibold text-orange-600 pb-4'>
        Last Updated:09.07.2023
      </p>
      </div>
    </div>
    </div>
    <div className=' text-center'>
    <Footer/>
    </div>
    
    </>
  );
};

export default TermsOfService;
