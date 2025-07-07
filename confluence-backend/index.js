const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock Data
const spaces = [
  {
    id: 'space-1',
    name: 'Engineering',
    description: 'All engineering documentation, API references, and technical project spaces.',
    lead: 'Alice Johnson',
    createdAt: '2022-01-15',
    lastUpdated: '2024-06-01',
    numPages: 3,
    recentActivity: [
      'API Documentation updated by Bob Smith',
      'DevOps Playbook reviewed by Charlie Lee',
      'Frontend Guidelines created by Alice Johnson',
    ],
  },
  {
    id: 'space-2',
    name: 'HR',
    description: 'Human Resources policies, onboarding, and benefits information.',
    lead: 'Diana Prince',
    createdAt: '2021-09-10',
    lastUpdated: '2024-05-20',
    numPages: 3,
    recentActivity: [
      'Leave Policy updated by Eve Adams',
      'Onboarding Checklist reviewed by Diana Prince',
      'Employee Handbook updated by Diana Prince',
    ],
  },
  {
    id: 'space-3',
    name: 'Marketing',
    description: 'Marketing campaigns, brand guidelines, and content calendars.',
    lead: 'Frank Miller',
    createdAt: '2022-03-05',
    lastUpdated: '2024-06-05',
    numPages: 3,
    recentActivity: [
      'Q2 Campaign Plan created by Grace Kim',
      'Brand Guidelines updated by Frank Miller',
      'Content Calendar reviewed by Grace Kim',
    ],
  },
  {
    id: 'space-4',
    name: 'Product',
    description: 'Product specs, roadmaps, and release notes.',
    lead: 'Grace Kim',
    createdAt: '2023-02-12',
    lastUpdated: '2024-06-10',
    numPages: 3,
    recentActivity: [
      'Product Roadmap updated by Grace Kim',
      'Release Notes created by Frank Miller',
      'Feature Specs reviewed by Alice Johnson',
    ],
  },
];

const pages = [
  // Engineering
  { id: 'page-1', spaceId: 'space-1', title: 'API Documentation', summary: 'REST API endpoints, authentication, and usage examples.' },
  { id: 'page-2', spaceId: 'space-1', title: 'Frontend Guidelines', summary: 'React, CSS, and UI/UX best practices.' },
  { id: 'page-3', spaceId: 'space-1', title: 'DevOps Playbook', summary: 'CI/CD, deployment, and monitoring procedures.' },
  // HR
  { id: 'page-4', spaceId: 'space-2', title: 'Employee Handbook', summary: 'Company policies, code of conduct, and benefits.' },
  { id: 'page-5', spaceId: 'space-2', title: 'Onboarding Checklist', summary: 'Step-by-step onboarding for new hires.' },
  { id: 'page-6', spaceId: 'space-2', title: 'Leave Policy', summary: 'Paid time off, sick leave, and holidays.' },
  // Marketing
  { id: 'page-7', spaceId: 'space-3', title: 'Q2 Campaign Plan', summary: 'Objectives, channels, and KPIs for Q2.' },
  { id: 'page-8', spaceId: 'space-3', title: 'Brand Guidelines', summary: 'Logo usage, color palette, and voice.' },
  { id: 'page-9', spaceId: 'space-3', title: 'Content Calendar', summary: 'Upcoming blog posts, newsletters, and events.' },
  // Product
  { id: 'page-10', spaceId: 'space-4', title: 'Product Roadmap', summary: 'Upcoming features and release schedule.' },
  { id: 'page-11', spaceId: 'space-4', title: 'Release Notes', summary: 'Recent product updates and bug fixes.' },
  { id: 'page-12', spaceId: 'space-4', title: 'Feature Specs', summary: 'Detailed specifications for new features.' },
];

const pageDetails = {
  'page-1': {
    id: 'page-1',
    title: 'API Documentation',
    content: `## Overview\nOur REST API allows you to manage users, projects, and tasks.\n\n## Authentication\n- All requests require an API key.\n- Pass the key in the Authorization header.\n\n## Endpoints\n- GET /api/users\n- POST /api/projects\n- PATCH /api/tasks/:id\n\nSee the full OpenAPI spec for details.`
  },
  'page-2': {
    id: 'page-2',
    title: 'Frontend Guidelines',
    content: `## React Best Practices\n- Use functional components and hooks.\n- Keep components small and focused.\n- Use CSS modules for styling.\n\n## UI/UX\n- Follow our design system.\n- Ensure accessibility (a11y) compliance.\n- Write clear, concise copy.`
  },
  'page-3': {
    id: 'page-3',
    title: 'DevOps Playbook',
    content: `## CI/CD\n- All merges to main trigger a build and deploy to staging.\n- Production deploys require approval.\n\n## Monitoring\n- Use Datadog dashboards for service health.\n- Set up alerts for error rates > 1%.`
  },
  'page-4': {
    id: 'page-4',
    title: 'Employee Handbook',
    content: `## Welcome\nWe're excited to have you!\n\n## Code of Conduct\n- Treat everyone with respect.\n- No harassment or discrimination.\n\n## Benefits\n- Health, dental, vision insurance.\n- 401(k) with company match.`
  },
  'page-5': {
    id: 'page-5',
    title: 'Onboarding Checklist',
    content: `## Steps\n- Complete HR paperwork.\n- Set up your laptop and accounts.\n- Meet your team and manager.\n- Review the employee handbook.`
  },
  'page-6': {
    id: 'page-6',
    title: 'Leave Policy',
    content: `## Paid Time Off\n- 15 days PTO per year.\n- 10 company holidays.\n\n## Sick Leave\n- 5 days per year, does not roll over.`
  },
  'page-7': {
    id: 'page-7',
    title: 'Q2 Campaign Plan',
    content: `## Objectives\n- Increase brand awareness by 20%.\n- Launch new product feature.\n\n## Channels\n- Social media, email, webinars.\n\n## KPIs\n- Website traffic, signups, engagement.`
  },
  'page-8': {
    id: 'page-8',
    title: 'Brand Guidelines',
    content: `## Logo Usage\n- Use the primary logo on white backgrounds.\n- Do not stretch or recolor the logo.\n\n## Colors\n- Primary: #2563eb\n- Secondary: #f4f5f7\n\n## Voice\n- Friendly, clear, and professional.`
  },
  'page-9': {
    id: 'page-9',
    title: 'Content Calendar',
    content: `## Upcoming Content\n- Blog: "How We Built Our API" (May 10)\n- Newsletter: "Q2 Product Updates" (May 20)\n- Webinar: "Scaling React Apps" (June 1)`
  },
  'page-10': {
    id: 'page-10',
    title: 'Product Roadmap',
    content: `## Q2\n- Feature A: User dashboards\n- Feature B: SSO integration\n\n## Q3\n- Feature C: Mobile app\n- Feature D: Advanced analytics`
  },
  'page-11': {
    id: 'page-11',
    title: 'Release Notes',
    content: `## 2024-06-01\n- Added SSO support.\n- Improved dashboard performance.\n\n## 2024-05-15\n- Fixed login bug.\n- Updated onboarding flow.`
  },
  'page-12': {
    id: 'page-12',
    title: 'Feature Specs',
    content: `## User Dashboards\n- Customizable widgets\n- Real-time data\n\n## SSO Integration\n- Supports Okta, Google, Azure AD.`
  },
};

const teams = [
  {
    id: 'team-1',
    name: 'Platform Team',
    description: 'Responsible for core infrastructure, CI/CD, and developer tooling.',
    members: [
      { name: 'Alice Johnson', role: 'Tech Lead', email: 'alice@company.com' },
      { name: 'Bob Smith', role: 'DevOps Engineer', email: 'bob@company.com' },
      { name: 'Charlie Lee', role: 'Backend Engineer', email: 'charlie@company.com' },
    ],
    projects: ['API', 'CI/CD Pipeline', 'Monitoring'],
  },
  {
    id: 'team-2',
    name: 'HR Team',
    description: 'Handles recruiting, onboarding, and employee relations.',
    members: [
      { name: 'Diana Prince', role: 'HR Manager', email: 'diana@company.com' },
      { name: 'Eve Adams', role: 'Recruiter', email: 'eve@company.com' },
    ],
    projects: ['Onboarding', 'Benefits', 'Policy Updates'],
  },
  {
    id: 'team-3',
    name: 'Marketing Team',
    description: 'Drives brand awareness, campaigns, and content strategy.',
    members: [
      { name: 'Frank Miller', role: 'Marketing Lead', email: 'frank@company.com' },
      { name: 'Grace Kim', role: 'Content Strategist', email: 'grace@company.com' },
    ],
    projects: ['Q2 Campaign', 'Brand Refresh', 'Content Calendar'],
  },
];

const meetings = [
  {
    id: 'meeting-1',
    title: 'Sprint Planning',
    date: '2024-06-01',
    notes: 'Discussed sprint goals, assigned tasks, and reviewed previous sprint outcomes.',
    attendees: ['Alice Johnson', 'Bob Smith', 'Charlie Lee'],
    actionItems: [
      'Finalize user dashboard requirements',
      'Set up new monitoring alerts',
    ],
  },
  {
    id: 'meeting-2',
    title: 'All Hands',
    date: '2024-06-05',
    notes: 'Company updates, Q&A with leadership, and recognition of top performers.',
    attendees: ['All Employees'],
    actionItems: [
      'Submit questions for next All Hands',
      'Review updated benefits package',
    ],
  },
  {
    id: 'meeting-3',
    title: 'Product Sync',
    date: '2024-06-10',
    notes: 'Reviewed product roadmap, discussed feature priorities, and demoed new release.',
    attendees: ['Product Team', 'Engineering Team'],
    actionItems: [
      'Share feedback on new features',
      'Update roadmap in Confluence',
    ],
  },
];

// Endpoints
app.get('/', (req, res) => {
  res.send('Confluence Backend API is running!');
});

app.get('/api/spaces', (req, res) => {
  res.json(spaces);
});

app.get('/api/pages', (req, res) => {
  const { spaceId } = req.query;
  if (spaceId) {
    return res.json(pages.filter(p => p.spaceId === spaceId));
  }
  res.json(pages);
});

app.get('/api/page/:id', (req, res) => {
  const page = pageDetails[req.params.id];
  if (page) return res.json(page);
  res.status(404).json({ error: 'Page not found' });
});

app.get('/api/teams', (req, res) => {
  res.json(teams);
});

app.get('/api/meetings', (req, res) => {
  res.json(meetings);
});

app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const results = [];
  pages.forEach(page => {
    if (page.title.toLowerCase().includes(q) || page.summary.toLowerCase().includes(q)) {
      results.push({ type: 'page', ...page });
    }
  });
  teams.forEach(team => {
    if (team.name.toLowerCase().includes(q) || team.members.some(m => m.name.toLowerCase().includes(q))) {
      results.push({ type: 'team', ...team });
    }
  });
  meetings.forEach(meeting => {
    if (meeting.title.toLowerCase().includes(q) || meeting.notes.toLowerCase().includes(q)) {
      results.push({ type: 'meeting', ...meeting });
    }
  });
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 