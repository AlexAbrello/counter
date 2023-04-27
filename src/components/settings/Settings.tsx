import React, {ChangeEvent, FC, useState} from 'react';
import {Button} from "../button/Button";

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
        <div>
          <div>
            <span>Start value: </span><input value={startValue}
                                             type="number"
                                             onChange={onChangeHandlerStart}
                                             className={}
          />
            {startValueError && <div>error</div>}
          </div>
          <div>
            <span>Max Value: </span><input value={maxValue} type="number" onChange={onChangeHandlerMax}/>
            {maxValueError && <div>error</div>}
          </div>
        </div>
        <Button callBack={callBackSetCount}
                name={'set'}
                disabled={maxValueError || startValueError}
        />
      </div>
  );
};

