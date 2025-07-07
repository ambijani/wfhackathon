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

const Doc6 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>Security & Permissions</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>Confluence provides robust security and permission controls to protect your content and manage access.</p>
    <ol style={{ fontSize: 16, color: '#444' }}>
      <li>Set space permissions for groups and users</li>
      <li>Restrict page access to specific users</li>
      <li>Use page history and audit logs to track changes</li>
      <li>Enable SSO and 2FA for enhanced security</li>
    </ol>
    {callout('tip', 'Review permissions regularly to ensure only the right people have access.')}
    {callout('info', 'Did you know? You can set permissions at the space, page, and even attachment level.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://support.atlassian.com/confluence-cloud/docs/space-permissions-overview/" target="_blank" rel="noopener noreferrer">Space Permissions Overview</a></li>
        <li><a href="https://support.atlassian.com/confluence-cloud/docs/restrict-access-to-pages/" target="_blank" rel="noopener noreferrer">Restrict Access to Pages</a></li>
      </ul>
    </div>
  </div>
);

export default Doc6; 