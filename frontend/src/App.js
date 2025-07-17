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
// import TimelineComponent from './components/TimelineComponent/TimelineComponent';
import Preparing from './components/preparing/preparing';
import Acknowledgement from './components/acknowledgement/acknowledgement'
import Tourist from './components/tourist/Tourist';



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Speakers/>
      <Tracks />
      {/* <TimelineComponent/> */}
      <CallForPaper/>
      <Registration/> 
      <Preparing/>
      <hr></hr>
      <Faculties />
      <Tourist />
      <Acknowledgement/>
      <Footer/>
      
    </div>
  );
}

export default App;
