import * as React from 'react';
import c from 'classnames';
import s from './Welcome1.modules.scss'

export const Welcome1: React.FC = () => {
  // @ts-ignore
  const {blue, wrapper} = s;
  // @ts-ignore
  return (
    <div className={c(s.wrapper, s.blue)}>
      <div className='frank'>
        山竹记账
      </div>
    </div>
  )
}
