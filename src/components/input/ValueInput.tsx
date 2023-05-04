import React, {ChangeEvent, FC} from 'react';
import style from "../settings/Settings.module.css";

type ValueInputType = {
  value: number
  changeCallBack: (value: number) => void
  error: boolean
}

const ValueInput: FC<ValueInputType> = ({
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
};

export default ValueInput;