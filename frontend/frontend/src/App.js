import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Doc1 from './pages/Doc1';
import Doc2 from './pages/Doc2';
import Doc3 from './pages/Doc3';
import Doc4 from './pages/Doc4';
import Doc5 from './pages/Doc5';
import Doc6 from './pages/Doc6';
import Doc7 from './pages/Doc7';
import Doc8 from './pages/Doc8';
import Doc9 from './pages/Doc9';
import Doc2Hooks from './pages/Doc2Hooks';
import Doc2Routing from './pages/Doc2Routing';
import Doc3Automation from './pages/Doc3Automation';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doc1" element={<Doc1 />} />
            <Route path="/doc2" element={<Doc2 />} />
            <Route path="/doc2/hooks" element={<Doc2Hooks />} />
            <Route path="/doc2/routing" element={<Doc2Routing />} />
            <Route path="/doc3" element={<Doc3 />} />
            <Route path="/doc3/automation" element={<Doc3Automation />} />
            <Route path="/doc4" element={<Doc4 />} />
            <Route path="/doc5" element={<Doc5 />} />
            <Route path="/doc6" element={<Doc6 />} />
            <Route path="/doc7" element={<Doc7 />} />
            <Route path="/doc8" element={<Doc8 />} />
            <Route path="/doc9" element={<Doc9 />} />
          </Routes>
        </main>
      </div>
      <Chatbot />
    </Router>
  );
}

export default App; 