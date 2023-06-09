import React, {memo, useCallback, useEffect} from 'react';
import {Settings} from "../settings/Settings";
import {Counter} from "../counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {
  CounterType,
  incrementCountAC,
  resetCountAC,
  setOnMaxValueAC,
  setOnStartValueAC, setStartCountAC
} from "../../reducers/countReducer";

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

  const state = useSelector<AppRootStateType, CounterType>(state => state.counter)
  const dispatch = useDispatch()

  const startValue = state.startValue
  const maxValue = state.maxValue
  const count = state.count
  const disabled = state.disabled

  const setOnStartValueChange = useCallback((value: number) => {
    dispatch(setOnStartValueAC(value))
  }, [dispatch])
  const setOnMaxValueChange = useCallback((value: number) => {
    dispatch(setOnMaxValueAC(value))
  }, [dispatch])
  const incrementCount = useCallback(() => {
    dispatch(incrementCountAC())
  }, [dispatch])
  const resetCount = useCallback(() => {
    dispatch(resetCountAC())
  }, [dispatch])
  const setStartCount = useCallback(() => {
    dispatch(setStartCountAC())
  }, [dispatch])

  return (
      <div className={'App'}>
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
});

