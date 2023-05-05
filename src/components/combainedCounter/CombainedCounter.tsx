import React, {useEffect, useState} from 'react';
import {CombainedCounterComponent} from "./CombainedCounterComponent";
import {Route, Routes} from "react-router-dom";
import {CombainedSettingsComponent} from "./CombainedSettingsComponent";

export const CombainedCounter = () => {

  const [startValue, setStartValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(1)

  const [count, setCount] = useState<number>(0)
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    let startValue = localStorage.getItem('startValue')
    let maxValue = localStorage.getItem('maxValue')
    if (startValue) {
      let currentStartValue = JSON.parse(startValue)
      setStartValue(currentStartValue)
    }
    if (maxValue) {
      let currentMaxValue = JSON.parse(maxValue)
      setMaxValue(currentMaxValue)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
  }, [startValue])

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [maxValue])

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
        <div>
          <Routes>
            <Route path={'/'} element={<CombainedCounterComponent count={count}
                                                                  startValue={startValue}
                                                                  maxValue={maxValue}
                                                                  incrementCount={incrementCount}
                                                                  resetCount={resetCount}
                                                                  disabled={disabled}/>}
            />
            <Route path={'/settings'} element={<CombainedSettingsComponent startValue={startValue}
                                                         maxValue={maxValue}
                                                         callBackMax={setOnMaxValueChange}
                                                         callBackStart={setOnStartValueChange}
                                                         callBackSetCount={setStartCount}/>}
            />
          </Routes>
        </div>
  );
};

