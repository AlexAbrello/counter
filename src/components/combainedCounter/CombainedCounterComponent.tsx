import React, {FC} from 'react';
import style from "../counter/Counter.module.css";
import {Button} from "../button/Button";
import {NavLink} from "react-router-dom";

type CombainedCounterComponentType = {
  count: number
  startValue: number
  maxValue: number
  disabled: boolean
  incrementCount: () => void
  resetCount: () => void
}

export const CombainedCounterComponent: FC<CombainedCounterComponentType> = ({
                                                                               count,
                                                                               maxValue,
                                                                               startValue,
                                                                               disabled,
                                                                               resetCount,
                                                                               incrementCount
                                                                             }) => {
  const content = disabled
      ? <div>enter value in 'Settings' and press 'set'</div>
          : <div className={`${(count > maxValue - 1) && style.endNumberColor} ${style.number}`}>
            {count}
          </div>

  return (
      <div className={'container'}>
        <div className={style.background}>
            {content}
        </div>
        <div className={style.buttonsArea}>
          <Button name={'inc'}
                  callBack={incrementCount}
                  disabled={(count > maxValue - 1) || disabled}
          />
          <Button name={'reset'}
                  callBack={resetCount}
                  disabled={(count === startValue) || disabled}
          />
          <NavLink className={style.settings} to={'/settings'}>Settings</NavLink>
        </div>
      </div>
  );
};

