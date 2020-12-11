import './assets/styles/App.css';
import Header from "./assets/components/Header"
import CannedResponses from "./assets/components/CannedResponses.js"
import Instructions from './assets/components/Instructions.js'



function App() {
  return (
    // My main app
    <div className="App">
      <Header />
      <Instructions/>
      <CannedResponses />
    </div>
  );
}

export default App;
