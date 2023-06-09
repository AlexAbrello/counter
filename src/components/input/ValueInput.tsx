import React, {ChangeEvent, FC, memo} from 'react';
import style from "../settings/Settings.module.css";

type ValueInputType = {
  value: number
  changeCallBack: (value: number) => void
  error: boolean
}

export const ValueInput: FC<ValueInputType> = memo(({
                                          value,
                                          changeCallBack,
                                          error
                                        }) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeCallBack(+e.currentTarget.value)
  }

  return (
      <>
        <input value={value}
               type="number"
               onChange={onChangeHandler}
               className={error ? style.error : ''}
        />
      </>
  );
});

