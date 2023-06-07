import './App.css';
import Forum from './components/Forum';


import SeasonInfo from './components/SeasonInfo'
import GrowInfo from './components/GrowInfo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Community Garden</h1>
      <Forum />
      </header>
    {/* testing for SeasonPoster component and GrowInfo. This will be removed. */}
    
    <SeasonInfo season="Summer" />
    <GrowInfo 
    name="Watermelon" 
    companion="corn,radishes,marigolds"
    water="Regular watering"
    zone="3-11"
    />
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


