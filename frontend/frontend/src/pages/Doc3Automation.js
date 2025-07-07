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

const Doc3Automation = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>Jira Automation</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>Jira Automation allows you to automate repetitive tasks and processes in Jira, saving time and reducing errors.</p>
    <ol style={{ fontSize: 16, color: '#444' }}>
      <li>Go to Project Settings &gt; Automation</li>
      <li>Choose a template or create a custom rule</li>
      <li>Set triggers, conditions, and actions</li>
      <li>Test and enable your automation rule</li>
    </ol>
    {callout('tip', 'Use automation to auto-assign issues, send notifications, or update fields based on triggers.')}
    {callout('info', 'Did you know? You can share automation rules across multiple Jira projects.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://support.atlassian.com/jira-software-cloud/docs/what-are-jira-automation-rules/" target="_blank" rel="noopener noreferrer">Jira Automation Rules</a></li>
        <li><a href="https://www.atlassian.com/software/jira/automation" target="_blank" rel="noopener noreferrer">Jira Automation Overview</a></li>
      </ul>
    </div>
  </div>
);

export default Doc3Automation; 