import React, {FC} from 'react';
import {Button} from "../button/Button";
import style from './Settings.module.css'
import ValueInput from "../input/ValueInput";

type SettingsType = {
  startValue: number
  maxValue: number
  callBackMax: (value: number) => void
  callBackStart: (value: number) => void
  callBackSetCount: () => void
}

export const Settings: FC<SettingsType> = ({
                                             startValue,
                                             maxValue,
                                             callBackMax,
                                             callBackStart,
                                             callBackSetCount
                                           }) => {

  const startValueError: boolean = (startValue > maxValue || startValue < 0)
  const maxValueError: boolean = (maxValue <= 0 || maxValue <= startValue)

  return (
      <div>
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
          <Button callBack={callBackSetCount}
                  name={'set'}
                  disabled={maxValueError || startValueError}
          />
        </div>
      </div>
  );
};

