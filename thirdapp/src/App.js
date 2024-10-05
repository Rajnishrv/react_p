import { useEffect, useState } from 'react';
import './Apps.css';
function App() {
  let [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("http://localhost:3000/item");
      let res = await data.json();
      setItem(res)
    }
    fetchData();
  }, [])
  console.log(item);

  return (
    <div className="App">
    {
      item.map((ele)=>{
        return <div>
          <div className='products'>
          
          id : {ele.id}
          name : {ele.name}
          price : {ele.price}
          <img src={ele.image}></img>
          
          </div>
        </div>
      })
    }
    </div>
  );
}

export default App;
