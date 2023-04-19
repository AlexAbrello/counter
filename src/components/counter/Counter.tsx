import React, {useState} from 'react';
import {Button} from "../button/Button";
import style from './Counter.module.css'

export const Counter = () => {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prev => prev + 1)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
      <div>
        <div className={`${(count > 4) && style.endNumberColor} ${style.number} ${style.background}`}>
        {count}
        </div>
        <div className={style.buttonsArea}>
          <Button name={'inc'}
                  callBack={incrementCount}
                  disabled={count > 4}
          />
          <Button name={'reset'}
                  callBack={resetCount}
                  disabled={count === 0}
          />
        </div>
      </div>
  );
};

