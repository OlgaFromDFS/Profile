import React from 'react';

import { Header } from './components/Header/Header';
import { User } from './components/User/User';
import { Menu } from './components/Menu/Menu';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <User />
      <Menu />
      <Button />
    </div>
  );
}

export { App };
