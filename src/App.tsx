import React from 'react';
import Header from './components/pages/UI/StyledHeader';

import { Outlet } from 'react-router-dom';
import Footer from './components/UI/Footer';
import { styled } from 'styled-components';
import useMediaQuery from './hooks/use-media-query';

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className='App'> 
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      {!isMobile && <Footer />}
    </div>
  );
};

export default App;
