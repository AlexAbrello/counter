import React, {ChangeEvent, FC, useState} from 'react';
import {Button} from "../button/Button";
import style from './Settings.module.css'

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

  const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
    callBackMax(+e.currentTarget.value)
  }
  const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
    callBackStart(+e.currentTarget.value)
  }
  const startValueError: boolean = (startValue > maxValue || startValue < 0)
  const maxValueError: boolean = (maxValue <= 0 || maxValue <= startValue)

  return (
      <div>
        <div className={style.background}>
          <div>
            <span>Start value: </span><input value={startValue}
                                             type="number"
                                             onChange={onChangeHandlerStart}
                                             className={startValueError ? style.error : ''}
          />
          </div>
          <div>
            <span>Max Value: </span><input value={maxValue}
                                           type="number"
                                           onChange={onChangeHandlerMax}
                                           className={maxValueError ? style.error : ''}
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

