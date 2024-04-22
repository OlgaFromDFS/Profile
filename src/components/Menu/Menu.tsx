import React from 'react';
import type { FC } from 'react';

import { cnMenu } from './Menu.classname';

import './Menu.css';
import key from './img/Key.svg';
import chat from './img/Chat.svg';
import bell from './img/Bell.svg';
import storage from './img/Storage.svg';
import help from './img/Help.svg';
import inviteAFriend from './img/Invite a friend.svg';

const Menu: FC = () => {
    return(
        <div className={cnMenu()}>
          <div className={cnMenu('Container')}><img className={cnMenu('ItemIcon')} src={key} /><p className={cnMenu('Item')}>Account</p></div>
          <div className={cnMenu('Container')}><img className={cnMenu('ItemIcon')} src={chat} /><p className={cnMenu('Item')}>Chat Settings</p></div>
          <div className={cnMenu('Container')}><img className={cnMenu('ItemIcon')} src={bell} /><p className={cnMenu('Item')}>Notifications</p></div>
          <div className={cnMenu('Container')}><img className={cnMenu('ItemIcon')} src={storage} /><p className={cnMenu('Item')}>Storage</p></div>
          <div className={cnMenu('Container')}><img className={cnMenu('ItemIcon')} src={help} /><p className={cnMenu('Item')}>Help</p></div>
          <div className={cnMenu('Container')}><img className={cnMenu('ItemIcon')} src={inviteAFriend} /><p className={cnMenu('Item')}>Invite a friend</p></div>
      </div>
    )
};

export { Menu };