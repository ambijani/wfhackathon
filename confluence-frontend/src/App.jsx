import './App.css';
import { useState, useEffect } from 'react';

const STATIC_SIDEBAR = [
  {
    section: 'Teams & Meetings',
    items: [
      { label: 'Teams', type: 'teams' },
      { label: 'Meetings', type: 'meetings' },
    ],
  },
];

function TopNavBar({ spaces, onSelect, selected }) {
  return (
    <nav className="top-navbar">
      <div className="logo">Confluence</div>
      <ul className="nav-links">
        {spaces.map((space) => (
          <li
            key={space.id}
            className={selected === space.id ? 'selected' : ''}
            onClick={() => onSelect(space.id, 'space')}
          >
            {space.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Sidebar({ sections, selected, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-scroll">
        {sections.map((section) => (
          <div key={section.section} className="sidebar-section">
            <div className="sidebar-section-title">{section.section}</div>
            <ul className="sidebar-list">
              {section.items.map((item) => (
                <SidebarItem key={item.id || item.label} item={item} selected={selected} onSelect={onSelect} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="sidebar-search">
        <input placeholder="Search" />
      </div>
    </aside>
  );
}

function SidebarItem({ item, selected, onSelect, level = 0 }) {
  return (
    <>
      <li
        className={`sidebar-link${selected === (item.id || item.label) ? ' selected' : ''}`}
        style={{ paddingLeft: 20 + level * 16 }}
        onClick={() => onSelect(item.id || item.label, item.type)}
      >
        {item.title || item.label}
      </li>
      {item.children && (
        <ul className="sidebar-list">
          {item.children.map((child) => (
            <SidebarItem key={child.id || child.label} item={child} selected={selected} onSelect={onSelect} level={level + 1} />
          ))}
        </ul>
      )}
    </>
  );
}

function MainContent({ loading, page, teams, meetings, type, space, spacePages, onSelectPage }) {
  if (loading) return <main className="main-content"><p>Loading...</p></main>;
  if (type === 'teams' && teams) {
    return (
      <main className="main-content">
        <h1>Teams</h1>
        {teams.map(team => (
          <div key={team.id} className="info-box">
            <h2>{team.name}</h2>
            <p>{team.description}</p>
            <ul>
              {team.members.map(m => (
                <li key={m.email}><b>{m.name}</b> ({m.role}) - {m.email}</li>
              ))}
            </ul>
            <div><b>Projects:</b> {team.projects.join(', ')}</div>
          </div>
        ))}
      </main>
    );
  }
  if (type === 'meetings' && meetings) {
    return (
      <main className="main-content">
        <h1>Meetings</h1>
        {meetings.map(meeting => (
          <div key={meeting.id} className="info-box">
            <h2>{meeting.title} <span style={{fontWeight:400, fontSize:'0.8em'}}>({meeting.date})</span></h2>
            <p>{meeting.notes}</p>
            <div><b>Attendees:</b> {meeting.attendees.join(', ')}</div>
            <ul>
              {meeting.actionItems.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        ))}
      </main>
    );
  }
  if (space && spacePages) {
    return (
      <main className="main-content">
        <h1>{space.name}</h1>
        <p>{space.description}</p>
        <div style={{marginBottom: '1.5em'}}>
          <b>Space Lead:</b> {space.lead}<br/>
          <b>Created:</b> {space.createdAt}<br/>
          <b>Last Updated:</b> {space.lastUpdated}<br/>
          <b>Number of Pages:</b> {space.numPages}
        </div>
        <div style={{marginBottom: '1.5em'}}>
          <b>Recent Activity:</b>
          <ul>
            {space.recentActivity && space.recentActivity.map((act, i) => <li key={i}>{act}</li>)}
          </ul>
        </div>
        <h2>Pages</h2>
        <ul>
          {spacePages.map(page => (
            <li key={page.id}>
              <a href="#" onClick={e => { e.preventDefault(); onSelectPage(page.id); }}>{page.title}</a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  if (page) {
    // Enhanced rendering: group consecutive list items, render headings and paragraphs, and code blocks
    const lines = page.content.split('\n');
    const blocks = [];
    let listBuffer = [];
    let inCodeBlock = false;
    lines.forEach((line, idx) => {
      // Detect code-like lines: API methods, indented, or after 'Endpoints' heading
      const isCode = /^(GET|POST|PATCH|PUT|DELETE)\s|^See the full OpenAPI|^All requests require|^Pass the key|^\s{2,}/.test(line);
      if (line.startsWith('##')) {
        if (listBuffer.length) {
          blocks.push(<ul key={`ul-${idx}`}>{listBuffer.map((li, i) => <li key={i}>{li}</li>)}</ul>);
          listBuffer = [];
        }
        blocks.push(<h2 key={`h2-${idx}`}>{line.replace('##', '').trim()}</h2>);
        inCodeBlock = false;
      } else if (line.startsWith('-')) {
        listBuffer.push(line.replace('-', '').trim());
        inCodeBlock = false;
      } else if (line.trim() === '') {
        if (listBuffer.length) {
          blocks.push(<ul key={`ul-${idx}`}>{listBuffer.map((li, i) => <li key={i}>{li}</li>)}</ul>);
          listBuffer = [];
        }
        inCodeBlock = false;
      } else if (isCode) {
        if (listBuffer.length) {
          blocks.push(<ul key={`ul-${idx}`}>{listBuffer.map((li, i) => <li key={i}>{li}</li>)}</ul>);
          listBuffer = [];
        }
        blocks.push(<div className="code-block" key={`code-${idx}`}>{line}</div>);
        inCodeBlock = true;
      } else {
        if (listBuffer.length) {
          blocks.push(<ul key={`ul-${idx}`}>{listBuffer.map((li, i) => <li key={i}>{li}</li>)}</ul>);
          listBuffer = [];
        }
        blocks.push(<p key={`p-${idx}`}>{line}</p>);
        inCodeBlock = false;
      }
    });
    if (listBuffer.length) {
      blocks.push(<ul key={`ul-end`}>{listBuffer.map((li, i) => <li key={i}>{li}</li>)}</ul>);
    }
    return (
      <main className="main-content">
        <h1>{page.title}</h1>
        {blocks}
      </main>
    );
  }
  return <main className="main-content"><p>Select a page, team, or meeting to view details.</p></main>;
}

function ChatbotButton() {
  return (
    <button className="chatbot-fab">
      <span role="img" aria-label="chat">💬</span>
    </button>
  );
}

function App() {
  const [spaces, setSpaces] = useState([]);
  const [pages, setPages] = useState([]);
  const [sidebar, setSidebar] = useState(STATIC_SIDEBAR);
  const [selected, setSelected] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [page, setPage] = useState(null);
  const [teams, setTeams] = useState(null);
  const [meetings, setMeetings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [spacePages, setSpacePages] = useState(null);

  // Fetch spaces and pages on mount
  useEffect(() => {
    fetch('http://localhost:3001/api/spaces')
      .then(res => res.json())
      .then(spacesData => {
        setSpaces(spacesData);
        fetch('http://localhost:3001/api/pages')
          .then(res => res.json())
          .then(pagesData => {
            setPages(pagesData);
            // Build sidebar and nav links
            const sidebarSections = [
              {
                section: 'Spaces',
                items: spacesData.map(space => ({
                  label: space.name,
                  id: space.id,
                  children: pagesData.filter(p => p.spaceId === space.id).map(page => ({
                    label: page.title,
                    id: page.id,
                  })),
                })),
              },
              ...STATIC_SIDEBAR,
            ];
            setSidebar(sidebarSections);
          });
      });
  }, []);

  // Handle sidebar/nav selection
  const handleSelect = (id, type) => {
    setSelected(id);
    setSelectedType(type);
    setPage(null);
    setTeams(null);
    setMeetings(null);
    setSelectedSpace(null);
    setSpacePages(null);
    setLoading(true);
    if (type === 'teams') {
      fetch('http://localhost:3001/api/teams')
        .then(res => res.json())
        .then(data => { setTeams(data); setLoading(false); });
    } else if (type === 'meetings') {
      fetch('http://localhost:3001/api/meetings')
        .then(res => res.json())
        .then(data => { setMeetings(data); setLoading(false); });
    } else if (id && id.startsWith('page-')) {
      fetch(`http://localhost:3001/api/page/${id}`)
        .then(res => res.json())
        .then(data => { setPage(data); setLoading(false); });
    } else if (id && id.startsWith('space-')) {
      // Find space and fetch its pages
      const space = spaces.find(s => s.id === id);
      fetch(`http://localhost:3001/api/pages?spaceId=${id}`)
        .then(res => res.json())
        .then(data => {
          setSelectedSpace(space);
          setSpacePages(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  // Handler for clicking a page link from space overview
  const handleSelectPage = (id) => {
    handleSelect(id, null);
  };

  return (
    <div className="confluence-app">
      <TopNavBar spaces={spaces} onSelect={handleSelect} selected={selected} />
      <div className="confluence-body">
        <Sidebar sections={sidebar} selected={selected} onSelect={handleSelect} />
        <MainContent loading={loading} page={page} teams={teams} meetings={meetings} type={selectedType} space={selectedSpace} spacePages={spacePages} onSelectPage={handleSelectPage} />
        <ChatbotButton />
      </div>
    </div>
  );
}

export default App;
