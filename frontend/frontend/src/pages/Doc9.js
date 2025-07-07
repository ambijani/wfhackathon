import React from 'react';

const callout = (type, children) => (
  <div style={{
    background: type === 'tip' ? '#E3FCEF' : type === 'warn' ? '#FFF4E5' : '#E3F2FD',
    borderLeft: `6px solid ${type === 'tip' ? '#36B37E' : type === 'warn' ? '#FFAB00' : '#2684FF'}`,
    padding: '1rem',
    borderRadius: 8,
    margin: '1.5rem 0',
    color: '#333',
    fontSize: 16
  }}>
    <strong style={{ color: type === 'tip' ? '#36B37E' : type === 'warn' ? '#FFAB00' : '#2684FF' }}>{type === 'tip' ? 'Tip' : type === 'warn' ? 'Warning' : 'Did you know?'}</strong> {children}
  </div>
);

const Doc9 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>FAQ & Troubleshooting</h2>
    <h3 style={{ color: '#1976d2' }}>Frequently Asked Questions</h3>
    <ul style={{ fontSize: 16, color: '#444' }}>
      <li><strong>Q:</strong> How do I reset my password?<br/><strong>A:</strong> Click 'Forgot password' on the login page and follow the instructions.</li>
      <li><strong>Q:</strong> Why can't I see a page?<br/><strong>A:</strong> You may not have permission. Contact your admin to request access.</li>
      <li><strong>Q:</strong> How do I export a page to PDF?<br/><strong>A:</strong> Use the 'Export' option in the page menu.</li>
      <li><strong>Q:</strong> How do I contact support?<br/><strong>A:</strong> Visit the Help section or email support@confluence.com.</li>
    </ul>
    <h3 style={{ color: '#1976d2', marginTop: 32 }}>Troubleshooting</h3>
    <ul style={{ fontSize: 16, color: '#444' }}>
      <li><strong>Page not loading?</strong> Check your internet connection and try refreshing.</li>
      <li><strong>Edits not saving?</strong> Make sure you are logged in and have edit permissions.</li>
      <li><strong>Formatting issues?</strong> Use the page preview to check your formatting before publishing.</li>
    </ul>
    {callout('tip', 'Check the Confluence Community forums for solutions to common problems.')}
    {callout('info', 'Did you know? Most issues can be resolved by clearing your browser cache and cookies.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://community.atlassian.com/t5/Confluence/ct-p/confluence" target="_blank" rel="noopener noreferrer">Confluence Community</a></li>
        <li><a href="https://support.atlassian.com/confluence-cloud/" target="_blank" rel="noopener noreferrer">Confluence Support</a></li>
      </ul>
    </div>
  </div>
);

export default Doc9; 