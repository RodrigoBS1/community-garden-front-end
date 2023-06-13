import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";

import Forum from "./components/Forum";
import GeneralCarousel from "./components/GeneralCarousel";
import SeasonInfo from "./components/SeasonInfo";
import GrowInfo from "./components/GrowInfo";
import Statements from "./components/Statements";


import Articles from './components/Article';
import Navbar from './components/NavBar';

import Login from './components/Login'

import SignUp from './components/SignUp'

import Footer from './components/Footer';


import Articles from "./components/Article";
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


      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<GeneralCarousel />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/seasoninfo/:season' element={<SeasonInfo />} />
          <Route path='/growinfo/:season' element={<GrowInfo />} />
        </Routes>

        <Statements />
        <Forum />
        <Articles />
        <Footer />
      </Router>
      

    </div>
  );


}

export default App;
