import React from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";

function App() {
  return (
      <div className={"App"}>
        <div className={'container'}>
          <Counter/>
        </div>
      </div>
  );
}

export default App;
