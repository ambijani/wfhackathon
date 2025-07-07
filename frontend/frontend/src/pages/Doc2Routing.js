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

const Doc2Routing = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>React Routing</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>React Router is the standard library for routing in React. It enables navigation among views and keeps the UI in sync with the URL.</p>
    <ol style={{ fontSize: 16, color: '#444' }}>
      <li>Install with <code>npm install react-router-dom</code></li>
      <li>Wrap your app in <code>&lt;BrowserRouter&gt;</code></li>
      <li>Use <code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code> to define pages</li>
      <li>Use <code>&lt;Link&gt;</code> or <code>&lt;NavLink&gt;</code> for navigation</li>
    </ol>
    {callout('tip', 'Use <NavLink> for navigation links that highlight the active route.')}
    {callout('info', 'Did you know? React Router supports nested routes and route parameters for dynamic pages.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer">React Router Documentation</a></li>
        <li><a href="https://reactrouter.com/en/main/start/tutorial" target="_blank" rel="noopener noreferrer">React Router Tutorial</a></li>
      </ul>
    </div>
  </div>
);

export default Doc2Routing; 