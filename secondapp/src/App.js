import { useState } from 'react';
import './App.css';
import Car from './Car';
import Home from './Home';

function App() {
  let [val, setVal]=useState("Button not clicked")
  function first(){
    setVal("first Button clicked")
    console.log(val);
  }
    function second(sec){
      setVal("second Button clicked");
      console.log(val);
    }

  return (
    <>
      <h1 style={{backgroundColor:"yellow", color:"red"}}>App component</h1>
      <h1>Button: {val}</h1>
      <button onClick={first}>first</button>
      <button onClick={()=>{second("second")}}>second</button>
      <Car />
      <Home />
    </>
  );
}

export default App;
