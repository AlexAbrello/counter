import React, {FC, useState} from 'react';
import {Button} from "../button/Button";
import style from './Counter.module.css'

type CounterType = {
  count: number
  startValue: number
  maxValue: number
  incrementCount: () => void
  resetCount: () => void
}

export const Counter: FC<CounterType> = ({
                                           count,
                                           maxValue,
                                           startValue,
                                           resetCount,
                                           incrementCount
                                         }) => {

  return (
      <div>
        <div className={`${(count > maxValue - 1) && style.endNumberColor} ${style.number} ${style.background}`}>
          {count}
        </div>
        <div className={style.buttonsArea}>
          <Button name={'inc'}
                  callBack={incrementCount}
                  disabled={count > maxValue - 1}
          />
          <Button name={'reset'}
                  callBack={resetCount}
                  disabled={count === startValue}
          />
        </div>
      </div>
  );
};

