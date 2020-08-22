import React from "react";
import Container from "@material-ui/core/Container";
import Wiget from "./components/Wiget";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";

function App() {
  return (
    <div className='app'>
      <Wiget />

      <Container>
        <HeroSection />
        <Features />
      </Container>
    </div>
  );
}

export default App;
