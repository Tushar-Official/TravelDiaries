import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    
        apiKey: "AIzaSyCl7bvlIVPyL5wnCUc2f0h1Wi_7s-JxZlo",
      authDomain: "travel-diaries-fb065.firebaseapp.com",
      projectId: "travel-diaries-fb065",
      storageBucket: "travel-diaries-fb065.appspot.com",
      messagingSenderId: "776805704730",
      appId: "1:776805704730:web:33a13be6e0da907770dda3",
     
      
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export {app, provider };