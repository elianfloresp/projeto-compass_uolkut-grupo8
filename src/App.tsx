import React from "react";
import Header from "./components/pages/UI/StyledHeader";
import ProfileCard from "./components/Profile/ProfileCard";
import NavigationBar from "./components/Profile/NavigationBar";
import Editprofile from "./components/Profile/Editprofile";
import FriendListCard from "./components/Profile/FriendListCard";
import CommunityItem from "./components/Profile/CommunityItem";
import CommunityListCard from "./components/Profile/CommunityListCard";

import { Outlet } from "react-router-dom";
import FriendItem from "./components/Profile/FriendItem";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="navegation">
        <NavigationBar />
      </div>
      <div className="profile">
        <ProfileCard />
      </div>
      <div className="Editprofile">
        <Editprofile />
      </div>
      <div className="Friendlistcard">
      {/* <FriendListCard items={friendItems} /> */}
      </div>
     
    </div>
  );
};

export default App;
