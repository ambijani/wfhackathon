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

const Doc3 = () => (
  <div>
    <h2 style={{ color: '#0052CC' }}>Integrating with Jira</h2>
    <h3 style={{ color: '#1976d2' }}>Overview</h3>
    <p style={{ fontSize: 17 }}>Integrating Confluence with Jira enables seamless project management and documentation. You can link Jira issues to Confluence pages, create reports, and keep your team aligned.</p>
    <ol style={{ fontSize: 16, lineHeight: 1.7 }}>
      <li><strong>Connect Jira and Confluence:</strong> Go to Confluence settings &gt; Application Links, and enter your Jira site URL.</li>
      <li><strong>Authorize the Connection:</strong> Follow the prompts to authenticate and grant permissions.</li>
      <li><strong>Insert Jira Issues:</strong> Use the Jira Issues macro to display issues, epics, or projects on your Confluence pages.</li>
      <li><strong>Create Jira Issues from Confluence:</strong> Highlight text and use the 'Create Jira Issue' option.</li>
      <li><strong>Use Jira Reports:</strong> Add dynamic Jira reports to your pages for real-time project tracking.</li>
    </ol>
    {callout('tip', 'Use labels and smart links to automatically connect related Jira issues and Confluence pages.')}
    {callout('info', 'Did you know? You can create Jira issues directly from Confluence meeting notes or action items.')}
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Troubleshooting</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li><strong>Connection failed?</strong> Check that both Jira and Confluence are accessible and you have admin rights.</li>
        <li><strong>Issues not displaying?</strong> Make sure the Jira Issues macro is configured with the correct project and filters.</li>
        <li><strong>Permissions error?</strong> Ensure your user account has the necessary permissions in both Jira and Confluence.</li>
      </ul>
    </div>
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>FAQ</h3>
      <ul style={{ fontSize: 16, color: '#444' }}>
        <li><strong>Q:</strong> Can I link multiple Jira projects?<br/><strong>A:</strong> Yes, you can link as many Jira projects as needed.</li>
        <li><strong>Q:</strong> Are updates in Jira reflected in Confluence?<br/><strong>A:</strong> Yes, linked issues and reports update in real time.</li>
        <li><strong>Q:</strong> Can I restrict who sees Jira data in Confluence?<br/><strong>A:</strong> Yes, visibility depends on user permissions in both products.</li>
      </ul>
    </div>
    <div style={{ marginTop: 32 }}>
      <h3 style={{ color: '#1976d2' }}>Resources</h3>
      <ul>
        <li><a href="https://support.atlassian.com/confluence-cloud/docs/linking-confluence-and-jira-sites/" target="_blank" rel="noopener noreferrer">Linking Confluence and Jira Sites</a></li>
        <li><a href="https://support.atlassian.com/confluence-cloud/docs/use-jira-issues-macro/" target="_blank" rel="noopener noreferrer">Using the Jira Issues Macro</a></li>
        <li><a href="https://www.atlassian.com/software/confluence/jira-integration" target="_blank" rel="noopener noreferrer">Confluence & Jira Integration Overview</a></li>
      </ul>
    </div>
  </div>
);

export default Doc3; 