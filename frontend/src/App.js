import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/herosection/hero';
import AboutRit from './components/about/aboutrit';
import Speakers from './components/speaker/speakers';
import FacultiesWithArrows from './components/faculties/index';
import Tracks from './components/tracks/tracks';



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Speakers/>
      <FacultiesWithArrows />
      <Tracks />
    </div>
  );
}

export default App;
