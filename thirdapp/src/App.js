import { useEffect, useState } from 'react';

function App() {
  let [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("http://localhost:250/item");
      let res = await data.json();
      setItem(res)
    }
    fetchData();
  }, [])
  console.log(item);

  return (
    <div className="App">
      <h1>prise</h1>
    </div>
  );
}

export default App;
