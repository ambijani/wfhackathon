import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { to: '/doc1', label: 'Setting up BlazeMeter' },
      { to: '/doc2', label: 'Setting up React',
        sub: [
          { to: '/doc2/hooks', label: 'React Hooks' },
          { to: '/doc2/routing', label: 'React Routing' }
        ]
      },
      { to: '/doc7', label: 'Onboarding New Team Members' }
    ]
  },
  {
    title: 'Integrations',
    items: [
      { to: '/doc3', label: 'Integrating with Jira',
        sub: [
          { to: '/doc3/automation', label: 'Jira Automation' }
        ]
      }
    ]
  },
  {
    title: 'Best Practices',
    items: [
      { to: '/doc4', label: 'Writing Effective Documentation' },
      { to: '/doc5', label: 'User Management' },
      { to: '/doc6', label: 'Security & Permissions' },
      { to: '/doc8', label: 'Macros & Templates' }
    ]
  },
  {
    title: 'Help',
    items: [
      { to: '/doc9', label: 'FAQ & Troubleshooting' }
    ]
  }
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside style={{
      width: 270,
      background: '#F4F5F7',
      padding: '2rem 1.5rem',
      borderRight: '1px solid #E0E4EA',
      minHeight: '100vh',
      position: 'sticky',
      top: 0
    }}>
      {sections.map(section => (
        <div key={section.title} style={{ marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: '#1976d2', marginBottom: 10, fontSize: 16 }}>{section.title}</div>
          {section.items.map(item => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  display: 'block',
                  color: isActive ? '#0052CC' : '#222',
                  background: isActive ? '#E3F2FD' : 'none',
                  borderRadius: 6,
                  padding: '7px 14px',
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: 'none',
                  marginBottom: 2
                })}
                end
              >
                {item.label}
              </NavLink>
              {item.sub && (
                <div style={{ marginLeft: 18, marginTop: 2 }}>
                  {item.sub.map(subitem => (
                    <NavLink
                      key={subitem.to}
                      to={subitem.to}
                      style={({ isActive }) => ({
                        display: 'block',
                        color: isActive ? '#0052CC' : '#444',
                        background: isActive ? '#E3F2FD' : 'none',
                        borderRadius: 6,
                        padding: '5px 12px',
                        fontWeight: isActive ? 600 : 400,
                        textDecoration: 'none',
                        marginBottom: 2,
                        fontSize: 15
                      })}
                      end
                    >
                      {subitem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar; 