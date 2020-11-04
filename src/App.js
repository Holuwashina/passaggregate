import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import Platform from './sections/Platform';
import Prospective from './sections/Prospective';
import Team from './sections/Team';
import Support from '../src/sections/Support';
import Footer from '../src/sections/Footer';

function App() {
  return (
    <div className='app'>
      <NavBar />

      <Container>
        <Hero />
        <Platform />
        <Prospective />
        <Team />
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
