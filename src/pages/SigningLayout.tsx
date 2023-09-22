import React from "react";

import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../components/UI/Footer";
import useMediaQuery from "../hooks/use-media-query";

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <MainContent>
        <Outlet />
      </MainContent>
      {!isMobile && <Footer />}
    </>
  );
};

export default App;
