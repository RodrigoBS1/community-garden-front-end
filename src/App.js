import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Forum from './components/Forum';
import GeneralCarousel from './components/GeneralCarousel';


import SeasonInfo from './components/SeasonInfo'
import GrowInfo from './components/GrowInfo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Community Garden</h1>
      </header>
    {/* testing for SeasonPoster component and GrowInfo. This will be removed. */}
    

    <SeasonInfo season="Summer" />
    <GrowInfo 
    name="Watermelon" 
    companion="corn,radishes,marigolds"
    water="Regular watering"
    zone="3-11"
    />
    <GeneralCarousel />
    <br />
    <hr />
    <hr />
    <Forum />

    <Forum />


    <GeneralCarousel />
   
    <Router>
      <Routes>
        
        <Route path = '/seasoninfo' element = {<SeasonInfo season='Summer'/>} />
        <Route path = '/growinfo' element = {<GrowInfo />} />
      </Routes>  

      <SeasonInfo season="Spring" />
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


