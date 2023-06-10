import React, {FC, memo, useCallback} from 'react';
import {Button} from "../button/Button";
import style from './Settings.module.css'
import {ValueInput} from "../input/ValueInput";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setOnMaxValueAC, setOnStartValueAC, SettingsType} from "../../reducers/settingsReducer";
import {setStartCountAC} from "../../reducers/countReducer";


export const Settings = memo(() => {

  const state = useSelector<AppRootStateType, SettingsType>(state => state.stateForSettings)
  const dispatch = useDispatch()

  const startValue = state.startValue
  const maxValue = state.maxValue

  const setOnStartValueChange = useCallback((value: number) => {
    dispatch(setOnStartValueAC(value))
  }, [dispatch])
  const setOnMaxValueChange = useCallback((value: number) => {
    dispatch(setOnMaxValueAC(value))
  }, [dispatch])
  const setStartCount = useCallback(() => {
    dispatch(setStartCountAC(startValue, maxValue))
  }, [dispatch, startValue, maxValue])

  const startValueError: boolean = (startValue > maxValue || startValue < 0)
  const maxValueError: boolean = (maxValue <= 0 || maxValue <= startValue)

  return (
      <div>
        <div className={style.background}>
          <div>
            <span>Start value: </span>
            <ValueInput
                value={startValue}
                changeCallBack={setOnStartValueChange}
                error={startValueError}
            />
          </div>
          <div>
            <span>Max Value: </span>
            <ValueInput
                value={maxValue}
                changeCallBack={setOnMaxValueChange}
                error={maxValueError}
            />
          </div>
          {(startValueError || maxValueError) && <div className={style.textError}>enter correct value and press 'set'</div>}
        </div>
        <div className={style.button}>
          <Button callBack={setStartCount}
                  name={'set'}
                  disabled={maxValueError || startValueError}
          />
        </div>
      </div>
  );
});

