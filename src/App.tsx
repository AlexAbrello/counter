import React from 'react';
import './App.css';
import {SeparateCounter} from "./components/separateCounter/SeparateCounter";
import {CombainedCounter} from "./components/combainedCounter/CombainedCounter";


function App() {

  return (
      <div className={"App"}>
        {/*<SeparateCounter/>*/}
        <CombainedCounter/>
      </div>
  );
}

export default App;
