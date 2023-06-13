import "./App.css";
import { Navlink, Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


// import Forum from "./components/Forum";
import GeneralCarousel from "./components/GeneralCarousel";
import SeasonInfo from "./components/SeasonInfo";
import GrowInfo from "./components/GrowInfo";
import Statements from "./components/Statements";
import Footer from './components/Footer';
// import Articles from "./components/Article";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";



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
        </Routes>


       
        {/* <Forum />
        <Articles /> */}
        <Footer />


    </div>
  );


}

export default App;
