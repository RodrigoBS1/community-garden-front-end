
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from 'react'

import Forum from './components/Forum';
import GeneralCarousel from './components/GeneralCarousel';
import SeasonInfo from "./components/SeasonInfo";
import GrowInfo from "./components/GrowInfo";
import Statements from "./components/Statements";

function App() {


  return (

    <div className="App">


      <Router>
        
      <Statements />
      <GeneralCarousel />
    <br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
   
   
      {/* <SeasonInfo season="Spring" /> */}
      <Routes>
        
        <Route path = '/seasoninfo/:season' element = {<SeasonInfo />} />
        <Route path = '/growinfo' element = {<GrowInfo />} />
      </Routes>   

      
    </Router> 
      <div>
        <Forum />
      </div>

      <footer className="App-footer">
        <h1> Footer</h1>  
      </footer>
     
    </div>
  );
  
}

export default App;
