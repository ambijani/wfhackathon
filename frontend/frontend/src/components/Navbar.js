import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{
    background: 'linear-gradient(90deg, #0052CC 0%, #2684FF 100%)',
    padding: '0.75rem 2rem',
    color: 'white',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
  }}>
    <span style={{
      fontWeight: 'bold',
      fontSize: 22,
      marginRight: 32,
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '1px'
    }}>
      <span style={{ fontSize: 28, marginRight: 8 }}>📄</span>Confluence
    </span>
    <Link to="/" style={{ color: 'white', marginRight: '2rem', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
    <Link to="/doc1" style={{ color: 'white', marginRight: '2rem', textDecoration: 'none', fontWeight: 500 }}>Setting up BlazeMeter</Link>
    <Link to="/doc2" style={{ color: 'white', marginRight: '2rem', textDecoration: 'none', fontWeight: 500 }}>Setting up React</Link>
    <Link to="/doc3" style={{ color: 'white', marginRight: '2rem', textDecoration: 'none', fontWeight: 500 }}>Integrating with Jira</Link>
    <Link to="/doc4" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>Writing Effective Documentation</Link>
  </nav>
);

export default Navbar; 