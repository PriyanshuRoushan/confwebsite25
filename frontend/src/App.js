import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/herosection/hero';
import AboutRit from './components/about/aboutrit';
import Speakers from './components/speaker/speakers';
import Faculties from './components/faculties/faculties';
import Tracks from './components/tracks/tracks';
// import Schedule from './components/schedule/schedule';
import CallForPaper from './components/callforpaper/call4Paper';
import Location from './components/location/location';
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Tracks />
      {/* <Schedule /> */}
      <CallForPaper/>
       <Speakers/>
      <Faculties />
      <Location />
      <Footer/>
    </div>
  );
}

export default App;
