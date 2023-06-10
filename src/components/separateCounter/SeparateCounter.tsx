import React, {memo} from 'react';
import {Settings} from "../settings/Settings";
import {Counter} from "../counter/Counter";


export const SeparateCounter = memo(() => {
  // useEffect(() => {
  //   let startValue = localStorage.getItem('startValue')
  //   let maxValue = localStorage.getItem('maxValue')
  //   if (startValue) {
  //     let currentStartValue = JSON.parse(startValue)
  //     setStartValue(currentStartValue)
  //   }
  //   if (maxValue) {
  //     let currentMaxValue = JSON.parse(maxValue)
  //     setMaxValue(currentMaxValue)
  //   }
  // }, [])
  //
  // useEffect(() => {
  //   localStorage.setItem('startValue', JSON.stringify(startValue))
  // }, [startValue])
  //
  // useEffect(() => {
  //   localStorage.setItem('maxValue', JSON.stringify(maxValue))
  // }, [maxValue])

  return (
      <div className={'App'}>
        <div className={'container'}>
          <Settings />
        </div>
        <div className={'container'}>
          <Counter />
        </div>
      </div>
  );
});

