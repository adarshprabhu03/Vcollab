import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditProfile from './components/EditProfile'
import NavBar from './components/NavBar';
import Login from './components/Login'
import LandingPage from './components/LandingPage';
import Projects from './components/Projects'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <div>
      <NavBar isLoggedIn={isLoggedIn} /> {/* Render NavBar component */}
        <Routes>
          <Route path="/editprofile" element={<EditProfile />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
