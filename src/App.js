import React from "react";
import Container from "@material-ui/core/Container";
import Wiget from "./components/Wiget";
import HeroSection from "./components/HeroSection";
import SchoolSelection from "./components/SchoolSelection";
import UtmePostutme from "./components/UtmePostutme";
import JoinTeam from "./components/JoinTeam";
import Support from '../src/components/Support';
import Footer from '../src/components/Footer';


function App() {
  return (
    <div className='app'>
      <Wiget />

      <Container>
        <HeroSection />
        <SchoolSelection />
        <UtmePostutme/>
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
