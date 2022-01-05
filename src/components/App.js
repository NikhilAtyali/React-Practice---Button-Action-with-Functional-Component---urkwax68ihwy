import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [display, setDisplay] = useState({
    pHidden:true
  })
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id='click' onClick={()=>{
        setDisplay({pHidden:false})
      }} >Click</button>
      {
        display.pHidden?null: <p id='para'>
        Helloooo, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
     
}
    </div>
  );
}


export default App;
