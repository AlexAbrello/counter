import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {

  const [startValue, setStartValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(1)

  const [count, setCount] = useState<number>(0)
  const [disabled, setDisabled] = useState<boolean>(true)


  const setOnStartValueChange = (value: number) => {
    setStartValue(value)
    setDisabled(true)
  }
  const setOnMaxValueChange = (value: number) => {
    setMaxValue(value)
    setDisabled(true)
  }
  const incrementCount = () => {
    setCount(prev => prev + 1)
  }
  const resetCount = () => {
    setCount(startValue)
  }
  const setStartCount = () => {
    setCount(startValue)
    setDisabled(false)
  }

  return (
      <div className={"App"}>
        <div className={'container'}>
          <Settings startValue={startValue}
                    maxValue={maxValue}
                    callBackMax={setOnMaxValueChange}
                    callBackStart={setOnStartValueChange}
                    callBackSetCount={setStartCount}
          />
        </div>
        <div className={'container'}>
          <Counter count={count}
                   startValue={startValue}
                   maxValue={maxValue}
                   incrementCount={incrementCount}
                   resetCount={resetCount}
                   disabled={disabled}
          />
        </div>
      </div>
  );
}

export default App;
