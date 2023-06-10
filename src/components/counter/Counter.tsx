import React, {FC, memo, useCallback} from 'react';
import {Button} from "../button/Button";
import style from './Counter.module.css'
import {CounterType, incrementCountAC, resetCountAC} from "../../reducers/countReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

export const Counter = memo(() => {

  const state = useSelector<AppRootStateType, CounterType>(state => state.stateForCounter)
  const dispatch = useDispatch()

  const startCount = state.startCount
  const maxCount = state.maxCount
  const setCount = state.setCount
  const disabled = state.disabled

  const resetCount = useCallback(() => {
    dispatch(resetCountAC())
  }, [dispatch])

  const incrementCount = useCallback(() => {
    dispatch(incrementCountAC())
  }, [dispatch])

  // const startValueError: boolean = (startValue > maxValue || startValue < 0)
  // const maxValueError: boolean = (maxValue <= 0 || maxValue <= startValue)

  // const content = disabled && !(startValueError || maxValueError)
  //     ? <div>enter value and press 'set'</div>
  //     : (startValueError || maxValueError)
  //         ? <span className={style.textError}>enter correct value and press 'set'</span>
  //         : <div className={`${(startCount > maxValue - 1) && style.endNumberColor} ${style.number}`}>
  //           {startCount}
  //         </div>

  const content = disabled
      ? <div>enter value and press 'set'</div>
          : <div className={`${(startCount > maxCount - 1) && style.endNumberColor} ${style.number}`}>
            {startCount}
          </div>

  return (
      <div>
        <div className={style.background}>
          {content}
        </div>
        <div className={style.buttonsArea}>
          <Button name={'inc'}
                  callBack={incrementCount}
                  disabled={(startCount > maxCount - 1) || disabled}
          />
          <Button name={'reset'}
                  callBack={resetCount}
                  disabled={(startCount === setCount) || disabled}
          />
        </div>
      </div>
  );
});

