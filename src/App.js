import React, {useEffect, useState} from "react"
import './App.css';
import {CheckBox} from "./Components/CheckBox"

function App() {
  const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setData(json))
  }
  useEffect(()=> {
    getData()
  },[])
  const [data, setData] = useState([])
  return (
    <div>
      <h2>Checkbox</h2>
      <CheckBox data={data}/>
    </div>
  );
}

export default App;
