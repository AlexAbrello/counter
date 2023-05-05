import React, {FC} from 'react';
import {Button} from "../button/Button";
import style from '../settings/Settings.module.css'
import {ValueInput} from "../input/ValueInput";
import {NavLink} from "react-router-dom";

type CombainedSettingsComponentType = {
  startValue: number
  maxValue: number
  callBackMax: (value: number) => void
  callBackStart: (value: number) => void
  callBackSetCount: () => void
}

export const CombainedSettingsComponent: FC<CombainedSettingsComponentType> = ({
                                             startValue,
                                             maxValue,
                                             callBackMax,
                                             callBackStart,
                                             callBackSetCount
                                           }) => {

  const startValueError: boolean = (startValue > maxValue || startValue < 0)
  const maxValueError: boolean = (maxValue <= 0 || maxValue <= startValue)

  return (
      <div className={'container'}>
        <div className={style.background}>
          <div>
            <span>Start value: </span>
            <ValueInput
                value={startValue}
                changeCallBack={callBackStart}
                error={startValueError}
            />
          </div>
          <div>
            <span>Max Value: </span>
            <ValueInput
                value={maxValue}
                changeCallBack={callBackMax}
                error={maxValueError}
            />
          </div>
        </div>
        <div className={style.button}>
          <NavLink to={'/'}>
            <Button callBack={callBackSetCount}
                    name={'set'}
                    disabled={maxValueError || startValueError}
            />
          </NavLink>
        </div>
      </div>
  );
};

