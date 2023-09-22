import React from 'react';
import Header from './components/pages/UI/StyledHeader';

import { Outlet } from 'react-router-dom';
import Footer from './components/UI/Footer';


const App = () => {
  return (
    <div className='App'> 
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

