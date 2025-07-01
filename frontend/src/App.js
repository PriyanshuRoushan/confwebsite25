import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/herosection/hero';
import AboutRit from './components/about/aboutrit';
import Speakers from './components/speaker/speakers';



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Speakers/>
    </div>
  );
}

export default App;
