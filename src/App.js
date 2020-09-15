import React from 'react';
import Container from "@material-ui/core/Container";
import Wiget from "./sections/Wiget";
import HeroSection from "./sections/HeroSection";
import SchoolSelection from "./sections/SchoolSelection";
import UtmePostutme from "./sections/UtmePostutme";
import JoinTeam from "./sections/JoinTeam";
import Support from '../src/sections/Support';
import Footer from '../src/sections/Footer';


function App () {
  return (
    <div className='app'>
      <Wiget />

      <Container>
        <HeroSection />
        <SchoolSelection />
        <UtmePostutme />
        <JoinTeam />
        <Support />
        <Footer />

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