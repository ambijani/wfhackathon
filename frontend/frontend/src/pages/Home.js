import React from 'react';
import { Link } from 'react-router-dom';

const cardStyle = {
  background: 'white',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  transition: 'box-shadow 0.2s',
  textDecoration: 'none',
  color: '#222',
  display: 'block'
};

const Home = () => (
  <div>
    <div style={{
      background: 'linear-gradient(90deg, #E3F2FD 0%, #F5F7FA 100%)',
      borderRadius: 16,
      padding: '2.5rem 2rem',
      marginBottom: '2.5rem',
      textAlign: 'center',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
    }}>
      <h1 style={{ fontSize: 36, margin: 0, color: '#0052CC' }}>Welcome to Confluence</h1>
      <p style={{ fontSize: 20, color: '#333', marginTop: 16 }}>Your collaborative workspace for documentation and knowledge sharing.</p>
    </div>
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ color: '#1976d2' }}>What is Confluence?</h2>
      <p style={{ fontSize: 17, color: '#444' }}>
        Confluence is a powerful documentation and collaboration platform, enabling teams to create, organize, and share knowledge efficiently. Explore the example guides below to get started!
      </p>
      <ul style={{ fontSize: 16, color: '#444', marginLeft: 24 }}>
        <li>Centralize your team's knowledge and documentation</li>
        <li>Collaborate in real time with comments and editing</li>
        <li>Organize content with spaces, pages, and labels</li>
        <li>Integrate with tools like Jira, Trello, and Slack</li>
      </ul>
    </div>
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ color: '#1976d2' }}>Getting Started</h2>
      <ol style={{ fontSize: 16, color: '#444', marginLeft: 24 }}>
        <li>Sign up or log in to your Confluence workspace</li>
        <li>Create a new space for your team or project</li>
        <li>Add your first page and start documenting</li>
        <li>Invite team members to collaborate</li>
        <li>Explore templates and macros to enhance your docs</li>
      </ol>
    </div>
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ color: '#1976d2' }}>Featured Resources</h2>
      <ul style={{ fontSize: 16, color: '#444', marginLeft: 24 }}>
        <li><a href="https://www.atlassian.com/software/confluence/guides" target="_blank" rel="noopener noreferrer">Confluence Guides</a></li>
        <li><a href="https://www.atlassian.com/software/confluence/templates" target="_blank" rel="noopener noreferrer">Confluence Templates</a></li>
        <li><a href="https://community.atlassian.com/t5/Confluence/ct-p/confluence" target="_blank" rel="noopener noreferrer">Confluence Community</a></li>
      </ul>
    </div>
    <div>
      <Link to="/doc1" style={cardStyle}>
        <h3 style={{ color: '#0052CC', marginTop: 0 }}>Setting up BlazeMeter</h3>
        <p style={{ margin: 0 }}>A step-by-step guide to getting started with BlazeMeter for load testing your applications.</p>
      </Link>
      <Link to="/doc2" style={cardStyle}>
        <h3 style={{ color: '#0052CC', marginTop: 0 }}>Setting up React</h3>
        <p style={{ margin: 0 }}>Learn how to quickly set up a new React project and start building modern web apps.</p>
      </Link>
      <Link to="/doc3" style={cardStyle}>
        <h3 style={{ color: '#0052CC', marginTop: 0 }}>Integrating with Jira</h3>
        <p style={{ margin: 0 }}>How to connect Confluence with Jira for seamless project management and documentation.</p>
      </Link>
      <Link to="/doc4" style={cardStyle}>
        <h3 style={{ color: '#0052CC', marginTop: 0 }}>Writing Effective Documentation</h3>
        <p style={{ margin: 0 }}>Best practices, templates, and tips for creating clear, helpful documentation.</p>
      </Link>
    </div>
  </div>
);

export default Home; 