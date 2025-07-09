import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/herosection/hero';
import AboutRit from './components/about/aboutrit';
import Speakers from './components/speaker/speakers';
import Faculties from './components/faculties/faculties';
import Tracks from './components/tracks/tracks';
import Schedule from './components/schedule/schedule';
import CallForPaper from './components/callforpaper/call4Paper';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Tracks />
      <Speakers/>
      <Faculties />
      <Schedule />
      <CallForPaper/>
    </div>
  );
}

export default App;
