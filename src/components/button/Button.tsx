import React, {ButtonHTMLAttributes, DetailedHTMLProps, memo} from 'react';
import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type ButtonType = DefaultButtonPropsType & {
  name: string
  callBack: () => void
}

export const Button: React.FC<ButtonType> = memo(({name, callBack, disabled}) => {

  const onClickHandler = () => {
    callBack()
  }

  return (
      <div>
        <button
            className={style.button}
            disabled={disabled}
            onClick={onClickHandler}>{name}</button>
      </div>
  );
});

