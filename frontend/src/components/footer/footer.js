import React from 'react';
import {
  FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt,
  FaCalendarAlt, FaUsers, FaTwitter, FaLinkedin, FaFacebook, FaInstagram
} from 'react-icons/fa';
import Location from "../location/location";

const ConferenceFooter = () => {
  const coordinators = [
    {
      name: 'Ashwani Raj',
      linkedin: 'https://linkedin.com/in/ashwani-raj-57480028a',
      instagram: '#',
      gmail: 'ashwani@example.com'
    },
    {
      name: 'Harsh Raj Shukla',
      linkedin: '#',
      instagram: '#',
      gmail: 'harsh@example.com'
    },
    {
      name: 'Priyanshu Roushan',
      linkedin: '#',
      instagram: '#',
      gmail: 'priyanshiuu@example.com'
    },
    {
      name: 'Aditya Raj',
      linkedin: '#',
      instagram: '#',
      gmail: 'aditya@example.com'
    },
    {
      name: 'Vaishali Tiwari',
      linkedin: '#',
      instagram: '#',
      gmail: 'vaishali@example.com'
    }
  ];

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #0d47a1, #1565c0)',
      color: '#fff',
      padding: '40px 5%',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
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
      backgroundColor: '#42a5f5',
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
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Column 1 - Conference Info */}
        <div style={styles.column}>
          <h3 style={styles.heading}>ICETAPCI 2025<div style={styles.headingLine}></div></h3>
          <div style={styles.contactInfo}><FaCalendarAlt style={styles.icon} /><span style={styles.paragraph}>March 15–17, 2025</span></div>
          <div style={styles.contactInfo}><FaUsers style={styles.icon} /><span style={styles.paragraph}>500+ Participants</span></div>
          <div style={styles.contactInfo}><FaMapMarkerAlt style={styles.icon} /><span style={styles.paragraph}>RIT Roorkee, Uttarakhand</span></div>
        </div>

        {/* Column 2 - Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links<div style={styles.headingLine}></div></h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}><a href="#home" style={styles.link}>Home</a></li>
            <li style={styles.linkItem}><a href="#about" style={styles.link}>About</a></li>
            <li style={styles.linkItem}><a href="#cfp" style={styles.link}>Call for Papers</a></li>
            <li style={styles.linkItem}><a href="#speakers" style={styles.link}>Keynote Speakers</a></li>
            <li style={styles.linkItem}><a href="#schedule" style={styles.link}>Program Schedule</a></li>
            <li style={styles.linkItem}><a href="#tracks" style={styles.link}>Research Tracks</a></li>
          </ul>
        </div>

        {/* Column 3 - Student Coordinators */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Student Coordinators<div style={styles.headingLine}></div></h3>
          {coordinators.map((coord, i) => (
            <div key={i} style={styles.coordinatorCard}>
              <div style={styles.coordinatorName}>{coord.name}</div>
              <div style={styles.coordinatorSocial}>
                <a href={coord.linkedin} style={styles.link} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href={coord.instagram} style={styles.link}><FaInstagram /></a>
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
          <div style={styles.socialLinks}>
            <FaTwitter style={styles.socialIcon} />
            <FaLinkedin style={styles.socialIcon} />
            <FaFacebook style={styles.socialIcon} />
            <FaInstagram style={styles.socialIcon} />
          </div>
          <div style={{ marginTop: '20px' }}>
            <Location compact={true} />
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div style={styles.copyRight}>
        &copy; {new Date().getFullYear()} RIT Roorkee — All rights reserved.
        <div style={{ marginTop: '6px', fontSize: '13px', color: '#bbdefb' }}>
          Designed with ❤️ for Academic Excellence
        </div>
      </div>
    </footer>
  );
};

export default ConferenceFooter;

// import React from 'react';

// const ConferenceFooter = () => {
//   const styles = {
//     footer: {
//       backgroundColor: '#0d47a1',
//       color: '#fff',
//       padding: '40px 60px 20px',
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       fontFamily: 'Segoe UI, sans-serif',
//       borderTop: '4px solid #1565c0',
//     },
//     column: {
//       flex: '1 1 250px',
//       marginBottom: '20px',
//       paddingRight: '20px',
//     },
//     heading: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       marginBottom: '12px',
//       color: '#fff',
//     },
//     linkList: {
//       listStyle: 'none',
//       padding: 0,
//     },
//     linkItem: {
//       marginBottom: '8px',
//     },
//     link: {
//       color: '#bbdefb',
//       textDecoration: 'none',
//       fontSize: '14px',
//     },
//     copyRight: {
//       width: '100%',
//       textAlign: 'center',
//       paddingTop: '20px',
//       borderTop: '1px solid #1976d2',
//       fontSize: '13px',
//       color: '#e3f2fd',
//     },
//   };

//   return (
//     <footer style={styles.footer}>
//       {/* Column 1 - About */}
//       <div style={styles.column}>
//         <h3 style={styles.heading}>RIT Roorkee</h3>
//         <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
//           Roorkee Institute of Technology<br />
//           SH-73, Puhana, Roorkee<br />
//           Uttarakhand - 247667, India
//         </p>
//       </div>

//       {/* Column 2 - Quick Links */}
//       <div style={styles.column}>
//         <h3 style={styles.heading}>Quick Links</h3>
//         <ul style={styles.linkList}>
//           <li style={styles.linkItem}><a href="#home" style={styles.link}>Home</a></li>
//           <li style={styles.linkItem}><a href="#cfp" style={styles.link}>Call for Paper</a></li>
//           <li style={styles.linkItem}><a href="#speakers" style={styles.link}>Speakers</a></li>
//           <li style={styles.linkItem}><a href="#schedule" style={styles.link}>Schedule</a></li>
//           <li style={styles.linkItem}><a href="#tracks" style={styles.link}>Tracks</a></li>
//           <li style={styles.linkItem}><a href="#contact" style={styles.link}>Contact</a></li>
//         </ul>
//       </div>

//       {/* Column 3 - Contact */}
//       <div style={styles.column}>
//         <h3 style={styles.heading}>Contact</h3>
//         <p style={{ fontSize: '14px' }}>
//           📧 <a href="mailto:icetapci.2025@ritroorkee.com" style={styles.link}>icetapci.2025@ritroorkee.com</a><br />
//           ☎️ +91-1332-355555<br />
//           🌐 <a href="https://ritroorkee.com" target="_blank" rel="noreferrer" style={styles.link}>ritroorkee.com</a>
//         </p>
//       </div>

//       {/* Copyright */}
//       <div style={styles.copyRight}>
//         &copy; {new Date().getFullYear()} RIT Roorkee — All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default ConferenceFooter;
