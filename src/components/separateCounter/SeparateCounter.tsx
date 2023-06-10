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

  // const state = useSelector<AppRootStateType, CounterType>(state => state.counter)
  // const dispatch = useDispatch()
  //
  // const startValue = state.startValue
  // const maxValue = state.maxValue
  // const count = state.count
  // const disabled = state.disabled

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

