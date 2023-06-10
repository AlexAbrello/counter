import React, {memo} from 'react';
import {Settings} from "../settings/Settings";
import {Counter} from "../counter/Counter";


export const SeparateCounter = memo(() => {

  return (
      <div className={'App'}>
        <div className={'container'}>
          <Settings />
        </div>
        <div className={'container'}>
          <Counter />
        </div>
      </div>
  );
});

