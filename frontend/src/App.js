import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/herosection/hero';
import AboutRit from './components/about/aboutrit';
import Speakers from './components/speaker/speakers';
import Faculties from './components/faculties/faculties';
import Tracks from './components/tracks/tracks';



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Tracks />
      <Speakers/>
      <Faculties />
    </div>
  );
}

export default App;
