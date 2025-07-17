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
<<<<<<< HEAD
import TimelineComponent from './components/TimelineComponent/TimelineComponent';
=======
import Preparing from './components/preparing/preparing';
import Acknowledgement from './components/acknowledgement/acknowledgement'
>>>>>>> b0642ee07ad58da0a7349289b02fc58e70d3f4c4


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutRit/>
      <Speakers/>
<<<<<<< HEAD
      <Registration/> 
      <TimelineComponent/>
=======
      <Tracks />
>>>>>>> b0642ee07ad58da0a7349289b02fc58e70d3f4c4
      <CallForPaper/>
      <Registration/> 
      <Preparing/>
      <hr></hr>
      <Faculties />
      <Acknowledgement/>
      <Footer/>
    </div>
  );
}

export default App;
