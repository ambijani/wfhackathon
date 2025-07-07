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

const Doc2 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>Setting up React</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>React is a popular JavaScript library for building user interfaces. It enables you to build fast, interactive web apps with reusable components.</p>
    <ol style={{ fontSize: 16, lineHeight: 1.7 }}>
      <li><strong>Install Node.js:</strong> Download and install Node.js from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a>.</li>
      <li><strong>Install Create React App:</strong> Open your terminal and run <code>npx create-react-app my-app</code>.</li>
      <li><strong>Navigate to Your Project:</strong> <code>cd my-app</code></li>
      <li><strong>Start the Development Server:</strong> <code>npm start</code> to launch the app in your browser.</li>
      <li><strong>Edit Your App:</strong> Open <code>src/App.js</code> and start building your UI!</li>
    </ol>
    {callout('tip', 'Use VS Code for a great React development experience with helpful extensions.')}
    {callout('warn', 'Never commit your node_modules folder to version control!')}
    {callout('info', 'React has a huge ecosystem of libraries for routing, state management, and UI components.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Troubleshooting</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li><strong>npm start fails?</strong> Make sure Node.js is installed and you are in your project directory.</li>
        <li><strong>App not updating?</strong> Save your files and check the browser console for errors.</li>
        <li><strong>Module not found?</strong> Double-check your import paths and file names.</li>
      </ul>
    </div>
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>FAQ</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li><strong>Q:</strong> Can I use TypeScript with React?<br/><strong>A:</strong> Yes! Use <code>npx create-react-app my-app --template typescript</code>.</li>
        <li><strong>Q:</strong> How do I add routing?<br/><strong>A:</strong> Install <code>react-router-dom</code> and use the <code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code> components.</li>
        <li><strong>Q:</strong> How do I deploy my app?<br/><strong>A:</strong> Use <code>npm run build</code> and deploy the build folder to your preferred hosting service.</li>
      </ul>
    </div>
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Best Practices</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li>Break your UI into reusable components.</li>
        <li>Keep your state minimal and colocated with the components that use it.</li>
        <li>Use functional components and hooks for modern React development.</li>
        <li>Write tests for your components using tools like Jest and React Testing Library.</li>
      </ul>
    </div>
    {callout('info', 'Did you know? React was originally developed by Facebook and is now maintained by Meta and the open-source community.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React Documentation</a></li>
        <li><a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">React Learn</a></li>
        <li><a href="https://www.youtube.com/@Codevolution" target="_blank" rel="noopener noreferrer">React Tutorials on YouTube</a></li>
      </ul>
    </div>
  </div>
);

export default Doc2; 