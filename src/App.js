
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from 'react'

import Forum from './components/Forum';
import GeneralCarousel from './components/GeneralCarousel';
import SeasonInfo from "./components/SeasonInfo";
import GrowInfo from "./components/GrowInfo";
import Statements from "./components/Statements";

import Articles from './components/Article';
import Navbar from './components/NavBar';

import Login from './components/Login'
import Start from './components/Start'
import SignUp from './components/SignUp'


function App() {


  return (

    <div className="App">


      <Router>
        

      <Statements />
      <GeneralCarousel />
    <br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
   
   

      <header className="App-header">
        <h1> Community Garden</h1>  
      
      </header>
      <Routes>
        <Route path = '/' element = {<GeneralCarousel />} />
        <Route path = '/signup' element = {<SignUp />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/seasoninfo/:season' element = {<SeasonInfo />} />
        <Route path = '/growinfo/:season' element = {<GrowInfo />} />
      </Routes> 
      <Start />
     

     
     <Navbar />
   
   
     
        <Forum />
     

      {/* <SeasonInfo season="Spring" /> */}
      <Routes>
        <Route path = '/login' element = {<Login />} />
        <Route path = '/seasoninfo/:season' element = {<SeasonInfo />} />
        <Route path = '/growinfo/:season' element = {<GrowInfo />} />
      </Routes>   

      
    </Router> 
      <div>
        <Forum />
      </div>


      <footer className="App-footer">
        <h1> Footer</h1>  
      </footer>
     

    <Articles />

    </div>
  );
  
}

export default App;
