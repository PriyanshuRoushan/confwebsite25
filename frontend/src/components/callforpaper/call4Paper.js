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
      fontSize: '24px',
      fontWeight: 600
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '40px',
      gap: '20px',
      boxSizing: 'border-box',
      background: 'linear-gradient(to right, #f3f6fd, #e6ecfb)',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', sans-serif"
    },
    leftPanel: {
      flex: 7,
      minWidth: '300px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      padding: '30px'
    },
    rightPanel: {
      flex: 3,
      minWidth: '250px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    heading: {
      color: '#0d47a1'
    },
    list: {
      paddingLeft: '20px',
      lineHeight: '1.7'
    },
    dates: {
      marginTop: '30px',
      padding: '20px',
      background: '#e3f2fd',
      borderLeft: '5px solid #0d47a1',
      borderRadius: '8px'
    },
    button: {
      backgroundColor: '#0d47a1',
      color: '#fff',
      border: 'none',
      padding: '14px 30px',
      fontSize: '16px',
      borderRadius: '30px',
      cursor: 'pointer',
      marginBottom: '30px',
      transition: 'background-color 0.3s ease'
    },
    ethics: {
      fontSize: '14px',
      lineHeight: 1.6,
      textAlign: 'left',
      color: '#444',
      backgroundColor: '#f7f9ff',
      padding: '20px',
      borderRadius: '10px'
    }
  };

  return (
    <div>
      <header style={styles.header}>
        2025 — Call for Paper
      </header>

      <div style={styles.container}>
        {/* Left Panel */}
        <div style={styles.leftPanel}>
          <h2 style={styles.heading}>Submission Rules</h2>
          <ul style={styles.list}>
            <li>All papers must be written in English, max 6 pages (10pt, double-column format).</li>
            <li>Extra ₹1,000 per page beyond 6 pages.</li>
            <li>Only original, unpublished work should be submitted in PDF or MS Word format.</li>
            <li>Papers must not be under review elsewhere.</li>
            <li>Decisions will be made by the Technical Program Committee.</li>
            <li>Authors must register on Microsoft CMT to submit.</li>
            <li>Similarity score must not exceed 15%.</li>
          </ul>

          <div style={styles.dates}>
            <p><strong>Paper Submission Deadline:</strong> 31st July 2025</p>
            <p><strong>Acceptance Notification:</strong> 15th August 2025</p>
          </div>
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel}>
          <button style={styles.button} onClick={handleSubmit}>
            Submit Your Paper
          </button>
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
      </div>
    </div>
  );
};

export default CallForPaper;

