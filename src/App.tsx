import React, {useState} from 'react';
import './App.css';
import {SeparateCounter} from "./components/separateCounter/SeparateCounter";
import {CombainedCounter} from "./components/combainedCounter/CombainedCounter";


function App() {
  const [number, setNumber] = useState(0)
  console.log('App')
  return (
      <div className={"App"}>
        <div>{number}</div>
        <button onClick={() => setNumber(number + 1)}>+</button>
        <SeparateCounter/>
        <CombainedCounter/>
      </div>
  );
}

export default App;
