import "./App.css";
import { Navlink, Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



import Forum from "./components/Forum";
import GeneralCarousel from "./components/GeneralCarousel";
import SeasonInfo from "./components/SeasonInfo";
import GrowInfo from "./components/GrowInfo";
import Statements from "./components/Statements";
import Footer from './components/Footer';
import Articles from "./components/Article";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import About from "./components/About";
import LocalGardens from './components/LocalGardens'
import CommunityLanding from "./components/CommunityLanding";





function App() {
  return (
    <div className="App">
      
      <nav className="sticky">
        <Navbar />
      </nav>

      <div className="mission">
        <Statements />
      </div>

        <Routes>
          <Route path='/' element={<GeneralCarousel />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/seasoninfo/:season' element={<SeasonInfo />} />
          <Route path='/growinfo/:season' element={<GrowInfo />} />
          <Route path='/about' element={<About />} />

          <Route path='/localgardens/:city' element={<LocalGardens />} />


          <Route path='/localgardens/:userInfo' element={<LocalGardens />} />
          <Route path='/communitylanding/:info' element={<CommunityLanding />} />


        </Routes>
        


        <Forum />
        <Articles />
        <Footer />


    </div>
  );


}

export default App;
