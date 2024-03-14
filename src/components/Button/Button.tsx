import React from 'react';
import type { FC } from 'react';

import { cnButton } from './Button.classname';

import './Button.css';

const Button: FC = () => {
  return (
      <button className={cnButton()}>Logout</button>
  )
};

export { Button };
