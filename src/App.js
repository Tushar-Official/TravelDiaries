
import './App.css';
import MainInterface from './Components/MainInterface';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Sign from './Components/Sign';
import FirstPage from './Dairy/FirstPage';
import SecondPage from './Dairy/SecondPage';

function App() {
  return (
    <div className="App">
    <Router>
   
    <Routes>
   <Route path="/" element={<MainInterface/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<Sign/>}/>
    <Route path="/firstpageDiary" element={<FirstPage/>}/>
    <Route path="/secondPageDiary" element={<SecondPage/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
