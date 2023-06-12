
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from 'react'

import Forum from './components/Forum';
import GeneralCarousel from './components/GeneralCarousel';
import SeasonInfo from "./components/SeasonInfo";
import GrowInfo from "./components/GrowInfo";
import Login from './components/Login'
import Start from './components/Start'

function App() {


  return (
    <div className="App">
      <Router>
        
      <header className="App-header">
        <h1> Community Garden</h1>  
      
      </header>
      <Routes>
        <Route path = '/login' element = {<Login />} />
        <Route path = '/seasoninfo/:season' element = {<SeasonInfo />} />
        <Route path = '/growinfo/:season' element = {<GrowInfo />} />
      </Routes> 
      <Start />
      <GeneralCarousel />
    <br />
    <hr />
    <hr />
     
   
   
      <div>
        <Forum />
      </div>
      {/* <SeasonInfo season="Spring" /> */}
      <Routes>
        <Route path = '/login' element = {<Login />} />
        <Route path = '/seasoninfo/:season' element = {<SeasonInfo />} />
        <Route path = '/growinfo/:season' element = {<GrowInfo />} />
      </Routes>   

      
    </Router> 

    </div>
  );
  
}

// --Floating Nav Bar starts here!--

// --Floating Nav Bar ends here!--

// --Education sections starts here!--

// --Education sections ends here!--

// --Forum sections starts here!--

// --Forum sections ends here!--

export default App;
