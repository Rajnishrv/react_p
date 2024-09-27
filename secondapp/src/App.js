
import './App.css';
import Car from './Car';
import Home from './Home';

function App() {
  function first(){
    console.log("first Button clicked");
  }
    function second(sec){
      console.log(sec," Button clicked");
    }5
  return (
    <>
      <h1 style={{backgroundColor:"yellow", color:"red"}}>App component</h1>
      <button onClick={first}>first</button>
      <button onClick={()=>{second("second")}}>second</button>
      <Car />
      <Home />
    </>
  );
}

export default App;
