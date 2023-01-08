import './App.css';
import {Navigate, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Main from './components/Main.js';
import Contacts from './components/Contacts';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Main/> } exact />
        <Route path="/contacts" element={ <Contacts /> } />
        <Route path="/interests" element={<Interests/>} />
      </Routes>
      
    </div>
  );
}

export default App;
