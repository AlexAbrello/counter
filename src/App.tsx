import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";
import {SeparateCounter} from "./components/separateCounter/SeparateCounter";


function App() {

  return (
      <div className={"App"}>
       <SeparateCounter />
      </div>
  );
}

export default App;
