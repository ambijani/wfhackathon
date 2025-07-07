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

const Doc7 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>Onboarding New Team Members</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>A smooth onboarding process helps new team members become productive quickly. Use this checklist to ensure a great start.</p>
    <ol style={{ fontSize: 16, color: '#444' }}>
      <li>Send a welcome email with key resources</li>
      <li>Grant access to necessary spaces and tools</li>
      <li>Assign a mentor or buddy</li>
      <li>Schedule intro meetings with the team</li>
      <li>Share documentation on workflows and best practices</li>
    </ol>
    {callout('tip', 'Create an onboarding space in Confluence with all relevant guides and checklists.')}
    {callout('info', 'Did you know? Onboarding checklists can be reused and improved with each new hire.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://www.atlassian.com/team-playbook/plays/onboarding" target="_blank" rel="noopener noreferrer">Atlassian Onboarding Playbook</a></li>
        <li><a href="https://www.atlassian.com/software/confluence/templates/onboarding" target="_blank" rel="noopener noreferrer">Onboarding Templates</a></li>
      </ul>
    </div>
  </div>
);

export default Doc7; 