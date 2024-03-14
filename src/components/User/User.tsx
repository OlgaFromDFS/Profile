import React from 'react';
import type { FC } from 'react';

import { cnUser } from './User.classname';

import './User.css';
import janeDoe from './img/JaneDoe1.jpg';
import editIcon from './img/EditIcon.svg';

const User: FC = () => {
  return (
    <div className={cnUser()}>
      <div className={cnUser('ContainerAvatar')}>
        <img className={cnUser('ContainerAvatarPhoto')} src={janeDoe} />
      </div>
      <button className={cnUser('EditButton')}><img src={editIcon} /></button>
      <p className={cnUser('Name')}>Jane Doe</p>
      <p className={cnUser('SmallBio')}>This is a small bio description to let users express themselves</p>
    </div>
  )
};

export { User };
