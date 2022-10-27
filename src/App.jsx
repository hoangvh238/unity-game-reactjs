import { useState } from 'react';
import Popup from './Popup';
import './App.css';
function App() {
  const [buttonPopup,setButtonPopup] = useState(false);
  return (
    <div>    
      <main>
      <Popup trigger ={buttonPopup} setTrigger={setButtonPopup}>
      </Popup>
      </main>  
    </div>
  );
}

export default App;
