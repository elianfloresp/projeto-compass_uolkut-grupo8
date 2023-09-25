import React from 'react';
import Header from './components/pages/UI/StyledHeader';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'> 
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
