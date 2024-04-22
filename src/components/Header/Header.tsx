import React from 'react';
import type { FC } from 'react';

import { cnHeader } from './Header.classname';

import './Header.css';
import backIcon from './img/Back.svg';

const Header: FC = () => {
  return (
    <div className={cnHeader()}>
      <div className={cnHeader('Container')}>
        <a className={cnHeader('Link')}><img className={cnHeader('LinkBackIcon')} src={backIcon} /></a>
        <p className={cnHeader('Title')}>Profile</p>
      </div>
    </div>
  )
};

export { Header };
