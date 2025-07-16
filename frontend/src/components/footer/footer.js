import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#0d47a1',
      color: 'white',
      textAlign: 'center',
      padding: '30px 20px',
      marginTop: '40px',
      fontFamily: "'Segoe UI', sans-serif"
    },
    links: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap',
      marginTop: '10px'
    },
    link: {
      color: '#bbdefb',
      textDecoration: 'none',
      fontSize: '14px'
    },
    copy: {
      fontSize: '13px',
      marginTop: '15px',
      color: '#e3f2fd'
    }
  };

  return (
    <footer style={styles.footer}>
      <div>
        <strong>IoT-SIU 2025</strong> | International Conference on IoT & Smart Systems
      </div>

      <div style={styles.links}>
        <a href="#cfp" style={styles.link}>Call for Papers</a>
        <a href="#committee" style={styles.link}>Committee</a>
        <a href="#submission" style={styles.link}>Submission</a>
        <a href="#contact" style={styles.link}>Contact Us</a>
      </div>

      <div style={styles.copy}>
        &copy; {new Date().getFullYear()} SIU, India. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
