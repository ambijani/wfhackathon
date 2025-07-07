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

const Doc1 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>Setting up BlazeMeter</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>BlazeMeter is a cloud-based load testing platform that helps you ensure your applications can handle real-world traffic. It supports JMeter, Selenium, and more.</p>
    <ol style={{ fontSize: 16, lineHeight: 1.7 }}>
      <li><strong>Sign Up:</strong> Go to <a href="https://www.blazemeter.com/" target="_blank" rel="noopener noreferrer">blazemeter.com</a> and create a free account.</li>
      <li><strong>Install BlazeMeter Chrome Extension:</strong> Download the extension from the Chrome Web Store to record and run tests.</li>
      <li><strong>Create a Test:</strong> Click 'Create Test', choose your test type (e.g., URL, JMeter, Taurus), and configure your test parameters.</li>
      <li><strong>Run the Test:</strong> Start your test and monitor results in real time on the BlazeMeter dashboard.</li>
      <li><strong>Analyze Results:</strong> Review performance metrics, identify bottlenecks, and download reports as needed.</li>
    </ol>
    {callout('tip', 'You can import JMeter scripts directly into BlazeMeter for advanced testing scenarios.')}
    {callout('warn', 'Make sure your test targets are not production systems unless you have permission!')}
    {callout('info', 'BlazeMeter integrates with CI/CD tools like Jenkins and TeamCity for automated performance testing.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Troubleshooting</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li><strong>Test not starting?</strong> Check your network connection and ensure your test configuration is valid.</li>
        <li><strong>Results seem inaccurate?</strong> Make sure you are not running tests from behind a proxy or VPN.</li>
        <li><strong>Chrome extension not recording?</strong> Try reinstalling the extension and restarting your browser.</li>
      </ul>
    </div>
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>FAQ</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li><strong>Q:</strong> Can I run tests for free?<br/><strong>A:</strong> Yes, BlazeMeter offers a free tier with limited usage.</li>
        <li><strong>Q:</strong> Does BlazeMeter support API testing?<br/><strong>A:</strong> Yes, you can test REST and SOAP APIs.</li>
        <li><strong>Q:</strong> Can I schedule tests?<br/><strong>A:</strong> Yes, you can schedule recurring tests from the dashboard.</li>
      </ul>
    </div>
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Best Practices</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li>Start with small test loads and gradually increase traffic.</li>
        <li>Use realistic test data and scenarios.</li>
        <li>Analyze results after each test and iterate on your configuration.</li>
        <li>Integrate BlazeMeter with your CI/CD pipeline for continuous performance testing.</li>
      </ul>
    </div>
    {callout('info', 'Did you know? BlazeMeter can simulate millions of virtual users from multiple geographic locations.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://guide.blazemeter.com/hc/en-us" target="_blank" rel="noopener noreferrer">BlazeMeter Documentation</a></li>
        <li><a href="https://www.blazemeter.com/blog" target="_blank" rel="noopener noreferrer">BlazeMeter Blog</a></li>
        <li><a href="https://www.youtube.com/user/BlazeMeter" target="_blank" rel="noopener noreferrer">BlazeMeter YouTube Channel</a></li>
      </ul>
    </div>
  </div>
);

export default Doc1; 