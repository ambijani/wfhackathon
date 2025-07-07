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

const Doc8 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>Macros & Templates</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>Macros and templates help you create dynamic, reusable content in Confluence. Use them to enhance your pages and standardize documentation.</p>
    <ul style={{ fontSize: 16, color: '#444' }}>
      <li><strong>Macros:</strong> Add dynamic content like tables of contents, task lists, and Jira issues.</li>
      <li><strong>Templates:</strong> Use built-in or custom templates for consistent page structure.</li>
      <li><strong>Popular Macros:</strong> Table of Contents, Status, Code Block, Page Properties.</li>
    </ul>
    {callout('tip', "Create custom templates for your team's recurring documentation needs.")}
    {callout('info', 'Did you know? You can combine macros and templates for powerful, automated documentation workflows.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://support.atlassian.com/confluence-cloud/docs/insert-the-table-of-contents-macro/" target="_blank" rel="noopener noreferrer">Table of Contents Macro</a></li>
        <li><a href="https://support.atlassian.com/confluence-cloud/docs/create-a-template/" target="_blank" rel="noopener noreferrer">Creating Templates</a></li>
      </ul>
    </div>
  </div>
);

export default Doc8; 