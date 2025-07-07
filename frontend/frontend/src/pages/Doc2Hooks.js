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

const Doc2Hooks = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>React Hooks</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>Hooks are functions that let you use state and other React features in functional components. Common hooks include <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>.</p>
    <ul style={{ fontSize: 16, color: '#444' }}>
      <li><strong>useState:</strong> Adds local state to a function component.</li>
      <li><strong>useEffect:</strong> Runs side effects after rendering.</li>
      <li><strong>useContext:</strong> Accesses context values in a component tree.</li>
      <li><strong>Custom Hooks:</strong> Create your own hooks to reuse logic.</li>
    </ul>
    {callout('tip', 'Always call hooks at the top level of your component or custom hook.')}
    {callout('info', 'Did you know? Hooks were introduced in React 16.8 to simplify state management in functional components.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://react.dev/reference/react/useState" target="_blank" rel="noopener noreferrer">useState Documentation</a></li>
        <li><a href="https://react.dev/reference/react/useEffect" target="_blank" rel="noopener noreferrer">useEffect Documentation</a></li>
        <li><a href="https://react.dev/learn/reusing-logic-with-custom-hooks" target="_blank" rel="noopener noreferrer">Custom Hooks Guide</a></li>
      </ul>
    </div>
  </div>
);

export default Doc2Hooks; 