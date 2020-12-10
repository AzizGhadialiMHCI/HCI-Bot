// import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Siri from "./Siri"
import CannedResponses from "./CannedResponses.js"
import TextParticles from "./TextParticles.js"
import Speech from "./Speech.js"
// import TWriter from "./TWriter"
// import BackgroundParticles from "./BackgroundParticles"
import Instructions from './Instructions.js'



function App() {
  return (
    <div className="App">
      <Header />
      <Instructions/>
      {/* <Speech /> */}
      {/* <Siri /> */}
      <CannedResponses />
      
    </div>
  );
}

export default App;
