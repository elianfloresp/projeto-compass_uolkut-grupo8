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

  /* height: 87.037037037vh; */
  margin-top: 17px;
  transition: all 0.1s linear;
  @media (min-width: 768px){
    margin-top: 13.7962962963vh;
  }
`;

const App = () => {
  const isNotMobile = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <MainContent>
        <Outlet />
      </MainContent>
      {isNotMobile && <Footer />}
    </>
  );
};

export default App;
