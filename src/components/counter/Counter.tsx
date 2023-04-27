import React, {FC, useState} from 'react';
import {Button} from "../button/Button";
import style from './Counter.module.css'

type CounterType = {
  count: number | string
  startValue: number
  maxValue: number
  disabled: boolean
  incrementCount: () => void
  resetCount: () => void
}

export const Counter: FC<CounterType> = ({
                                           count,
                                           maxValue,
                                           startValue,
                                           disabled,
                                           resetCount,
                                           incrementCount
                                         }) => {

  const startValueError: boolean = (startValue > maxValue || startValue < 0)
  const maxValueError: boolean = (maxValue <= 0 || maxValue <= startValue)

  return (
      <div>
        <div className={style.background}>
          {disabled && !(startValueError || maxValueError)
              ? <div>enter value and press 'set'</div>
              : (startValueError || maxValueError)
                  ? <span className={style.textError}>enter correct value and press 'set'</span>
                  : <div className={`${(count > maxValue - 1) && style.endNumberColor} ${style.number}`}>
                    {count}
                  </div>}
        </div>
        <div className={style.buttonsArea}>
          <Button name={'inc'}
                  callBack={incrementCount}
                  disabled={(count > maxValue - 1) || (startValueError || maxValueError) || disabled}
          />
          <Button name={'reset'}
                  callBack={resetCount}
                  disabled={(count === startValue) || (startValueError || maxValueError) || disabled}
          />
        </div>
      </div>
  );
};

