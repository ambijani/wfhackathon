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

const Doc4 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>Writing Effective Documentation</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>Clear, concise documentation helps your team work efficiently and reduces onboarding time. This guide covers best practices and useful templates.</p>
    <div style={{ marginTop: 24 }}>
      <h3 style={{ color: '#1976d2' }}>Best Practices</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li>Know your audience and write for their level of expertise.</li>
        <li>Use clear headings, bullet points, and short paragraphs.</li>
        <li>Keep documentation up to date and review it regularly.</li>
        <li>Include examples, screenshots, and diagrams where possible.</li>
        <li>Link to related pages and external resources.</li>
      </ul>
    </div>
    {callout('tip', 'Use Confluence templates to quickly create consistent, well-structured pages.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Templates</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li><strong>How-to Article:</strong> Step-by-step instructions for a specific task.</li>
        <li><strong>Meeting Notes:</strong> Record decisions, action items, and attendees.</li>
        <li><strong>Product Requirements:</strong> Outline features, user stories, and acceptance criteria.</li>
        <li><strong>Troubleshooting Guide:</strong> List common issues and solutions.</li>
      </ul>
    </div>
    {callout('info', 'Did you know? Well-written documentation can reduce support requests by up to 50%.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>FAQ</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li><strong>Q:</strong> How often should I update documentation?<br/><strong>A:</strong> Review and update docs at least once per quarter or after major changes.</li>
        <li><strong>Q:</strong> What tools can I use for diagrams?<br/><strong>A:</strong> Try draw.io, Lucidchart, or Confluence's built-in diagram tools.</li>
        <li><strong>Q:</strong> How do I encourage team contributions?<br/><strong>A:</strong> Make it easy to edit, and recognize contributors in team meetings.</li>
      </ul>
    </div>
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://www.atlassian.com/software/confluence/templates" target="_blank" rel="noopener noreferrer">Confluence Templates</a></li>
        <li><a href="https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/" target="_blank" rel="noopener noreferrer">Beginner's Guide to Docs</a></li>
        <li><a href="https://www.atlassian.com/team-playbook/plays/documentation-dojo" target="_blank" rel="noopener noreferrer">Atlassian Documentation Dojo</a></li>
      </ul>
    </div>
  </div>
);

export default Doc4; 