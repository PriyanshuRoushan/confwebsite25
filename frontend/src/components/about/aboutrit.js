import React from 'react'
import './aboutrit.css'
import galleryImage from '../assets/images/gallery.jpg';
import galleryImage2 from '../assets/images/gallery2.png';

const AboutRit = () => {
  return (
    <div className="main" id='about-rit'>
    {/* <div className="main-2">
        <div className="main-left">
        </div>
        <div className="main-right">
            <div className="logo">
                About ICETAPCI - 2025
            </div>
            <div className="head">

            </div>
            <div className="m-content">

            </div>
        </div>
    </div> */}
    <div className="main-1">
        <div className="main-left">

            

            <div className="logo">
                About RIT
            </div>
            <div className="content">
                <p className='head'>
                    Roorkee Institute of Technology
                </p>
                <p className='m-content'>
                    Founded in 2005, RIT Roorkee is a top engineering institution in Uttarakhand. It offers a rigorous, industry-aligned curriculum and admits students based on merit. With world-class infrastructure and dedicated faculty, the institute promotes academic excellence, ethical values, and social responsibility. RIT Roorkee emphasizes holistic development, fostering creativity and a strong work ethic. Its diverse environment prepares students for global careers. The institute's placement team works with top tier companies to ensure ample job opportunities, supporting students to excel in their professions. RIT Roorkee shapes future leaders in engineering and technology.
                </p>
            </div>

            <a href="https://ritroorkee.com/" className="web-btn">
              RIT Website <span className="arrow">→</span>
            </a>

        </div>
        <div className="main-right">
           <img src={galleryImage} alt="RIT Campus" />
        </div>
    </div>
    </div>
  )
}

export default AboutRit
