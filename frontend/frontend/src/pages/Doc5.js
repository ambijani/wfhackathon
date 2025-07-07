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

const Doc5 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>User Management</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>User management in Confluence allows you to control who can access, edit, and administer your spaces and pages.</p>
    <ol style={{ fontSize: 16, color: '#444' }}>
      <li>Go to Site Administration &gt; Users</li>
      <li>Invite new users by email</li>
      <li>Assign users to groups for bulk permissions</li>
      <li>Deactivate or remove users as needed</li>
    </ol>
    {callout('tip', 'Use groups to manage permissions for teams or departments efficiently.')}
    {callout('info', "Did you know? You can integrate Confluence user management with your company's SSO provider.")}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://support.atlassian.com/confluence-cloud/docs/manage-users/" target="_blank" rel="noopener noreferrer">Managing Users in Confluence</a></li>
        <li><a href="https://support.atlassian.com/confluence-cloud/docs/group-management/" target="_blank" rel="noopener noreferrer">Group Management</a></li>
      </ul>
    </div>
  </div>
);

export default Doc5; 