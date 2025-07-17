import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/herosection/hero';
import AboutRit from './components/about/aboutrit';
import Speakers from './components/speaker/speakers';
import Faculties from './components/faculties/faculties';
import Tracks from './components/tracks/tracks';
import CallForPaper from './components/callforpaper/call4Paper';
import Footer from './components/footer/footer'
import Registration from './components/registration/Registration';
import TimelineComponent from './components/TimelineComponent/TimelineComponent';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Tracks />
      <Speakers/>
      <Registration/> 
      <TimelineComponent/>
      <CallForPaper/>
      <Faculties />
      <Footer/>
    </div>
  );
}

export default App;
