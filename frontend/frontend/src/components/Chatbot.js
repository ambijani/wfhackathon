import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const getPageLabel = (pathname) => {
  // Map routes to human-readable page names
  switch (pathname) {
    case '/doc1': return 'Setting up BlazeMeter';
    case '/doc2': return 'Setting up React';
    case '/doc2/hooks': return 'React Hooks';
    case '/doc2/routing': return 'React Routing';
    case '/doc3': return 'Integrating with Jira';
    case '/doc3/automation': return 'Jira Automation';
    case '/doc4': return 'Writing Effective Documentation';
    case '/doc5': return 'User Management';
    case '/doc6': return 'Security & Permissions';
    case '/doc7': return 'Onboarding New Team Members';
    case '/doc8': return 'Macros & Templates';
    case '/doc9': return 'FAQ & Troubleshooting';
    default: return 'Home';
  }
};

const Chatbot = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I can help explain the docs. Ask me anything.' }
  ]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(location.pathname);
  const [pageLabel, setPageLabel] = useState(getPageLabel(location.pathname));

  // Update page context when route changes, but keep messages
  useEffect(() => {
    setPage(location.pathname);
    setPageLabel(getPageLabel(location.pathname));
  }, [location.pathname]);

  // Send message to backend (placeholder)
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input, page }];
    setMessages(newMessages);
    setInput('');
    // Example payload to backend
    // const response = await fetch('/api/chat', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     question: input,
    //     page,
    //     pageLabel,
    //     conversation: newMessages
    //   })
    // });
    // const data = await response.json();
    // setMessages([...newMessages, { from: 'bot', text: data.answer }]);
  };

  // Reset chat
  const handleReset = () => {
    setMessages([
      { from: 'bot', text: `Hi! I can help explain the docs for "${pageLabel}". Ask me anything.` }
    ]);
  };

  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            borderRadius: '50%',
            width: 60,
            height: 60,
            background: '#1976d2',
            color: 'white',
            fontSize: 30,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            zIndex: 1000
          }}
          aria-label="Open chatbot"
        >
          💬
        </button>
      )}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            width: 350,
            height: 500,
            background: 'white',
            borderRadius: 12,
            boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1001
          }}
        >
          <div style={{ padding: '1rem', borderBottom: '1px solid #eee', background: '#1976d2', color: 'white', borderTopLeftRadius: 12, borderTopRightRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Gemini Chatbot</span>
            <div>
              <button onClick={handleReset} style={{ background: 'white', color: '#1976d2', border: 'none', borderRadius: 6, padding: '2px 10px', marginRight: 8, cursor: 'pointer', fontWeight: 600 }}>Reset</button>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: 20, cursor: 'pointer' }}>&times;</button>
            </div>
          </div>
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', background: '#f9f9f9' }}>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 10 }}>
              <span>Context: <b>{pageLabel}</b></span>
            </div>
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: 10, textAlign: msg.from === 'user' ? 'right' : 'left' }}>
                <span style={{
                  display: 'inline-block',
                  background: msg.from === 'user' ? '#1976d2' : '#eee',
                  color: msg.from === 'user' ? 'white' : '#333',
                  borderRadius: 16,
                  padding: '8px 14px',
                  maxWidth: '80%',
                  wordBreak: 'break-word'
                }}>{msg.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #eee', padding: '0.5rem' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={`Ask about ${pageLabel}...`}
              style={{ flex: 1, border: 'none', outline: 'none', padding: '0.5rem', borderRadius: 8 }}
            />
            <button type="submit" style={{ marginLeft: 8, background: '#1976d2', color: 'white', border: 'none', borderRadius: 8, padding: '0.5rem 1rem', cursor: 'pointer' }}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 