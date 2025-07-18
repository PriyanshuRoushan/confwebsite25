import React from 'react';
import {
  FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt,
  FaCalendarAlt,FaLinkedin, 
} from 'react-icons/fa';
import Location from "../location/location";

const ConferenceFooter = () => {
  const coordinators = [
        {
      name: 'Ashwani Raj',
      linkedin: 'https://www.linkedin.com/in/ashwani-raj-57480028a',
      instagram: '#',
      gmail: 'ashwaniraj084@gmail.com'
    },
    {
      name: 'Harsh Raj Shukla',
      linkedin: 'https://www.linkedin.com/in/harsh-raj-shukla-043481296',
      instagram: '#',
      gmail: 'hrofficial6458@gmail.com'
    },
    {
      name: 'Priyanshu Roushan',
      linkedin: 'https://www.linkedin.com/in/priyanshu-roushan',
      instagram: '#',
      gmail: 'priyanshuroushan01@gmail.com'
    },
    {
      name: 'Aditya Raj',
      linkedin: 'http://linkedin.com/in/astro-adityaraj/',
      instagram: '',
      gmail: 'aditya.me269@gmail.com'
    },
    {
      name: 'Vaishali Tiwari',
      linkedin: 'https://www.linkedin.com/in/vaishali-tiwari-8030bb318',
      instagram: '#',
      gmail: 'vaishalitiwari152005@gmail.com'
    }
  ];

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #264087, #0c1b44ff)',
      color: '#fff',
      padding: '40px 5%',
      // fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      borderTop: '4px solid #42a5f5',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '40px',
    },
    column: {
      background: 'rgba(255,255,255,0.05)',
      padding: '20px',
      borderRadius: '8px',
    },
    heading: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '16px',
      position: 'relative',
    },
    headingLine: {
      position: 'absolute',
      bottom: '-6px',
      left: 0,
      width: '35px',
      height: '3px',
      backgroundColor: '#D63736',
    },
    paragraph: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: 1.6,
      color: '#e3f2fd',
      marginBottom: '10px',
    },
    contactInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    icon: {
      marginRight: '10px',
      color: '#42a5f5',
      fontSize: '18px',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '10px',
    },
    link: {
      color: '#bbdefb',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '600',
    },
    socialLinks: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
      flexWrap: 'wrap',
    },
    socialIcon: {
      color: '#bbdefb',
      fontSize: '20px',
      cursor: 'pointer',
    },
    coordinatorCard: {
      backgroundColor: 'rgba(255,255,255,0.07)',
      borderRadius: '4px',
      padding: '10px 14px',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    coordinatorName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#fff',
    },
    coordinatorSocial: {
      display: 'flex',
      gap: '6px',
    },
    copyRight: {
      width: '100%',
      textAlign: 'center',
      padding: '16px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      fontSize: '15px',
      color: '#e3f2fd',
      marginTop: '30px',
    },
  };

  return (
    <footer style={styles.footer} id='team'>
      <div style={styles.container}>

        {/* Column 1 - Conference Info */}
        <div style={styles.column}>
          <h3 style={styles.heading}>ICETAPCI 2025<div style={styles.headingLine}></div></h3>
          <div style={styles.contactInfo}><FaCalendarAlt style={styles.icon} /><span style={styles.paragraph}>DECEMBER 5-6, 2025</span></div>
          <div style={styles.contactInfo}><FaMapMarkerAlt style={styles.icon} /><span style={styles.paragraph}>RIT Roorkee, Uttarakhand</span></div>
        </div>

        {/* Column 2 - Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links<div style={styles.headingLine}></div></h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}><a href="#home" style={styles.link}>Home</a></li>
            <li style={styles.linkItem}><a href="#about-rit" style={styles.link}>About</a></li>
            <li style={styles.linkItem}><a href="#callforpaper" style={styles.link}>Call for Papers</a></li>
            <li style={styles.linkItem}><a href="#speakers" style={styles.link}>Keynote Speakers</a></li>
            {/* <li style={styles.linkItem}><a href="#schedule" style={styles.link}>Program Schedule</a></li> */}
            <li style={styles.linkItem}><a href="#main-tracks" style={styles.link}>Research Tracks</a></li>
          </ul>
        </div>

        {/* Column 3 - Student Coordinators */}
        <div style={styles.column} >
          <h3 style={styles.heading}>Student Coordinators<div style={styles.headingLine}></div>
          <br></br>
          <span style={{ 
            marginTop:"0px", 
            color: "#b8b8b8", 
            fontSize:"15px", 
            fontWeight:"lighter"
          }}>( The Team )</span>

           </h3>
          {coordinators.map((coord, i) => (
            <div key={i} style={styles.coordinatorCard} >
              <div style={styles.coordinatorName}>{coord.name}</div>
              <div style={styles.coordinatorSocial}>
                <a href={coord.linkedin} style={styles.link} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

                <a href={`mailto:${coord.gmail}`} style={styles.link}><FaEnvelope /></a>
              </div>
            </div>
          ))}
        </div>

        {/* Column 4 - Contact + Map */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Contact & Connect<div style={styles.headingLine}></div></h3>
          <div style={styles.contactInfo}><FaEnvelope style={styles.icon} /><a href="mailto:icetapci.2025@ritroorkee.com" style={styles.link}>icetapci.2025@ritroorkee.com</a></div>
          <div style={styles.contactInfo}><FaPhoneAlt style={styles.icon} /><span style={styles.paragraph}>+91-1332-355555</span></div>
          <div style={styles.contactInfo}><FaGlobe style={styles.icon} /><a href="https://ritroorkee.com" style={styles.link} target="_blank" rel="noopener noreferrer">ritroorkee.com</a></div>
   
          <div style={{ marginTop: '20px' }}>
            <Location compact={true} />
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div style={styles.copyRight}>
        &copy; {new Date().getFullYear()} RIT Roorkee — All rights reserved.
        <div style={{ marginTop: '6px', fontSize: '13px', color: '#bbdefb' }}>
          Designed with ❤️ by the
          <a
            href="#team"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <span style={{fontSize: "15px", fontWeight:'bold'}}> Team </span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default ConferenceFooter;

