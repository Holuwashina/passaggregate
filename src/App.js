import React from "react";
import Container from "@material-ui/core/Container";
import Wiget from "./components/Wiget";
import HeroSection from "./components/HeroSection";
import SchoolSelection from "./components/SchoolSelection";
import PostSchool from "./components/PostSchool";
import JoinTeam from "./components/JoinTeam";

function App() {
  return (
    <div className='app'>
      <Wiget />

      <Container>
        <HeroSection />
        <SchoolSelection />
        <PostSchool />
        <JoinTeam />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default App;
