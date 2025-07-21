import React from 'react';

const CallForPaper = () => {
  const handleSubmit = () => {
    alert("Redirecting to the submission portal...");
    window.open("https://cmt3.research.microsoft.com/", "_blank");
  };

  const styles = {
    header: {
      padding: '20px 40px',
      backgroundColor: '#0d47a1',
      color: 'white',
      textAlign: 'center',
      fontSize: 'clamp(18px, 4vw, 24px)',
      fontWeight: 600,
      scrollMarginTop: "100px"
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: 'clamp(20px, 4vw, 40px)',
      gap: '20px',
      boxSizing: 'border-box',
      background: 'linear-gradient(to right, #f8fbff, #f1f4f8)',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', sans-serif",
      scrollMarginTop: "40px"
    },
    panelContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '20px',
      width: '100%'
    },
    leftPanel: {
      flex: '1 1 60%',
      minWidth: '300px',
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: 'clamp(20px, 3vw, 30px)',
      boxShadow: 'rgba(0, 0, 0, 0.75) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
    },
    rightPanel: {
      flex: '1 1 30%',
      minWidth: '250px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: 'clamp(20px, 3vw, 30px)',
      boxShadow: 'rgba(0, 0, 0, 0.75) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    heading: {
      color: '#0d47a1',
      fontSize: 'clamp(18px, 2vw, 22px)',
      marginBottom: '15px'
    },
    list: {
      paddingLeft: '20px',
      lineHeight: '1.7',
      fontSize: 'clamp(14px, 1.8vw, 16px)',
      margin: 0
    },
    listItem: {
      marginBottom: '10px'
    },
    dates: {
      marginTop: '20px',
      padding: 'clamp(15px, 3vw, 20px)',
      background: '#e3f2fd',
      borderLeft: '5px solid #0d47a1',
      borderRadius: '8px',
      fontSize: 'clamp(14px, 1.8vw, 16px)'
    },
    dateItem: {
      marginBottom: '8px'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginTop: 'auto' // Pushes button to bottom
    },
    button: {
      backgroundColor: '#0d47a1',
      color: '#fff',
      border: 'none',
      padding: '12px 25px',
      fontSize: 'clamp(14px, 2vw, 16px)',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      width: '100%',
      maxWidth: '300px',
      '&:hover': {
        backgroundColor: '#1565c0'
      }
    },
    ethicsContainer: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    ethics: {
      fontSize: 'clamp(13px, 1.8vw, 14px)',
      lineHeight: 1.6,
      textAlign: 'left',
      color: '#444',
      backgroundColor: '#f7f9ff',
      padding: 'clamp(15px, 3vw, 20px)',
      borderRadius: '10px',
      width: '100%',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      hyphens: 'auto'
    }
  };

  return (
    <div>
      <header style={styles.header} id='callforpaper'>
        2025 — Call for Paper
      </header>

      <div style={styles.container}>
        <div style={styles.panelContainer}>
          {/* Left Panel */}
          <div style={styles.leftPanel}>
            <h2 style={styles.heading}>Submission Rules</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>All papers must be written in English, max 6 pages (10pt, double-column format).</li>
              <li style={styles.listItem}>Extra ₹1,000 per page beyond 6 pages.</li>
              <li style={styles.listItem}>Only original, unpublished work should be submitted in PDF or MS Word format.</li>
              <li style={styles.listItem}>Papers must not be under review elsewhere.</li>
              <li style={styles.listItem}>Decisions will be made by the Technical Program Committee.</li>
              <li style={styles.listItem}>Authors must register on Microsoft CMT to submit.</li>
              <li style={styles.listItem}>Similarity score must not exceed 15%.</li>
            </ul>

            <div style={styles.dates}>
              <p style={styles.dateItem}><strong>Call For Papers:</strong> 16th August 2025</p>
              <p style={styles.dateItem}><strong>Last Date of Submission:</strong> 10th September 2025</p>
              <p style={styles.dateItem}><strong>Acceptance Notification:</strong> 30th September 2025</p>
              <p style={styles.dateItem}><strong>Final Camera-Ready Paper:</strong> 10th October 2025</p>
              <p style={styles.dateItem}><strong>Registration Deadline:</strong> 20th November 2025</p>
              <p style={styles.dateItem}><strong>Conference Date:</strong> 5th December 2025 - 6th December 2025</p>
            </div>
          </div>

          {/* Right Panel */}
          <div style={styles.rightPanel}>
            <div style={styles.ethicsContainer}>
              <div style={styles.ethics}>
                <h3 style={styles.heading}>Publication Ethics</h3>
                <p>
                  All submissions must be original and free of plagiarism. Duplicate submissions, data fabrication, and unethical practices are not tolerated.
                </p>
                <p>
                  The organizing committee reserves the right to reject any paper that fails to meet academic integrity standards.
                </p>
              </div>
            </div>
            
            {/* Submit Button */}
            <div style={styles.buttonContainer}>
              <button 
                style={styles.button} 
                onClick={handleSubmit}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1565c0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#0d47a1'}
              >
                Submit Your Paper
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPaper;