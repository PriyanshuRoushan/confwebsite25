import React from 'react';

const ConferenceFooter = () => {
  const styles = {
    footer: {
      backgroundColor: '#0d47a1',
      color: '#fff',
      padding: '40px 60px 20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontFamily: 'Segoe UI, sans-serif',
      borderTop: '4px solid #1565c0',
    },
    column: {
      flex: '1 1 250px',
      marginBottom: '20px',
      paddingRight: '20px',
    },
    heading: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: '#fff',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '8px',
    },
    link: {
      color: '#bbdefb',
      textDecoration: 'none',
      fontSize: '14px',
    },
    copyRight: {
      width: '100%',
      textAlign: 'center',
      paddingTop: '20px',
      borderTop: '1px solid #1976d2',
      fontSize: '13px',
      color: '#e3f2fd',
    },
  };

  return (
    <footer style={styles.footer}>
      {/* Column 1 - About */}
      <div style={styles.column}>
        <h3 style={styles.heading}>RIT Roorkee</h3>
        <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
          Roorkee Institute of Technology<br />
          SH-73, Puhana, Roorkee<br />
          Uttarakhand - 247667, India
        </p>
      </div>

      {/* Column 2 - Quick Links */}
      <div style={styles.column}>
        <h3 style={styles.heading}>Quick Links</h3>
        <ul style={styles.linkList}>
          <li style={styles.linkItem}><a href="#home" style={styles.link}>Home</a></li>
          <li style={styles.linkItem}><a href="#cfp" style={styles.link}>Call for Paper</a></li>
          <li style={styles.linkItem}><a href="#speakers" style={styles.link}>Speakers</a></li>
          <li style={styles.linkItem}><a href="#schedule" style={styles.link}>Schedule</a></li>
          <li style={styles.linkItem}><a href="#tracks" style={styles.link}>Tracks</a></li>
          <li style={styles.linkItem}><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>
      </div>

      {/* Column 3 - Contact */}
      <div style={styles.column}>
        <h3 style={styles.heading}>Contact</h3>
        <p style={{ fontSize: '14px' }}>
          📧 <a href="mailto:icetapci.2025@ritroorkee.com" style={styles.link}>icetapci.2025@ritroorkee.com</a><br />
          ☎️ +91-1332-355555<br />
          🌐 <a href="https://ritroorkee.com" target="_blank" rel="noreferrer" style={styles.link}>ritroorkee.com</a>
        </p>
      </div>

      {/* Copyright */}
      <div style={styles.copyRight}>
        &copy; {new Date().getFullYear()} RIT Roorkee — All rights reserved.
      </div>
    </footer>
  );
};

export default ConferenceFooter;
