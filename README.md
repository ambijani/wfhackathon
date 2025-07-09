# Confluence Mock Application with AI Chatbot

A full-stack mock Confluence application with an integrated AI chatbot for documentation assistance. This project demonstrates a realistic enterprise documentation platform with intelligent search and Q&A capabilities.

## 🚀 Features

- **Confluence-like UI**: Authentic interface mimicking Atlassian Confluence
- **AI-Powered Chatbot**: OpenAI GPT-4 integration for intelligent documentation assistance
- **Dynamic Content**: Realistic mock data for spaces, pages, teams, and meetings
- **Responsive Design**: Modern React frontend with professional styling
- **RESTful API**: Express.js backend with comprehensive endpoints
- **Documentation Search**: Smart doc lookup with fallback mechanisms

## 📁 Project Structure

```
wellsHack/
├── confluence-chatbot/          # Backend server with AI chatbot
│   ├── main.js                  # Express server with OpenAI integration
│   ├── docs.js                  # Documentation database
│   ├── package.json             # Backend dependencies
│   └── .env                     # Environment variables (API keys)
├── frontend/frontend/           # React frontend application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Chatbot.js       # AI chatbot interface
│   │   │   ├── Navbar.js        # Top navigation bar
│   │   │   └── Sidebar.js       # Left sidebar navigation
│   │   ├── pages/               # Page components
│   │   │   ├── Home.js          # Landing page
│   │   │   ├── Doc1.js          # BlazeMeter setup guide
│   │   │   ├── Doc2.js          # React setup guide
│   │   │   └── ...              # Additional documentation pages
│   │   └── App.js               # Main application component
│   └── package.json             # Frontend dependencies
└── README.md                    # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd confluence-chatbot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   # or create .env manually
   ```

4. **Add your OpenAI API key:**
   ```bash
   echo "OPENAI_API_KEY=your_openai_api_key_here" > .env
   ```

5. **Start the backend server:**
   ```bash
   node main.js
   ```
   The server will run on `http://localhost:8080`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

## 🎯 Usage

### Navigation
- **Home**: Landing page with overview and featured resources
- **Documentation**: Browse through various guides and tutorials
- **Spaces**: Navigate between different project spaces
- **Teams**: View team information and members
- **Meetings**: Access meeting schedules and notes

### AI Chatbot
- Click the circular chatbot button in the bottom-right corner
- Ask questions about any documentation page
- The AI will provide contextual answers based on the current page content
- Supports conversation history for follow-up questions

### Available Documentation
- **BlazeMeter Setup**: Load testing platform configuration
- **React Setup**: Modern web development with React
- **Jira Integration**: Connecting Confluence with Jira
- **Documentation Best Practices**: Writing effective docs
- **User Management**: Admin and permission settings
- **Security & Permissions**: Access control and security
- **Team Onboarding**: New member integration
- **Macros & Templates**: Advanced Confluence features
- **FAQ & Troubleshooting**: Common issues and solutions

## 🔧 API Endpoints

### Chatbot API
- `POST /chatbot` - AI-powered Q&A endpoint
  - Body: `{ question, pageLabel, conversation }`
  - Returns: `{ answer }`

### Documentation Endpoints
- `GET /` - Homepage content
- `GET /doc1` - BlazeMeter setup guide
- `GET /doc2` - React setup guide
- `GET /doc3` - Jira integration guide
- And more...

## 🤖 AI Integration

The chatbot uses OpenAI's GPT-4 model to provide intelligent responses based on:
- Current page content
- Conversation history
- Available documentation context
- User query analysis

### Features:
- **Contextual Responses**: AI understands which page you're viewing
- **Conversation Memory**: Maintains context across multiple questions
- **Robust Doc Lookup**: Handles various URL formats and fallbacks
- **Error Handling**: Graceful degradation when docs aren't found

## 🎨 UI Components

### Chatbot Interface
- Floating circular button
- Expandable chat window
- Message history display
- Loading states and error handling

### Navigation
- Blue top navigation bar
- Collapsible sidebar with sections
- Breadcrumb navigation
- Responsive design

### Content Display
- Clean, readable typography
- Code block formatting
- Professional spacing and layout
- Confluence-style theming

## 🔒 Security Notes

- API keys are stored in `.env` files (not committed to git)
- CORS enabled for local development
- No authentication required for demo purposes
- Production deployment should include proper security measures

## 🚀 Deployment

### Backend Deployment
```bash
# Set production environment variables
export NODE_ENV=production
export PORT=8080
export OPENAI_API_KEY=your_production_key

# Start the server
node main.js
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Serve static files
npx serve -s build
```

## 📝 License

This project is for educational and demonstration purposes.

## 🆘 Troubleshooting

### Common Issues

1. **Backend won't start**: Check if port 8080 is available
2. **Chatbot not responding**: Verify OpenAI API key is set correctly
3. **Frontend can't connect**: Ensure backend is running on port 8080
4. **CORS errors**: Backend has CORS enabled for all origins

### Debug Mode
Enable debug logging by setting:
```bash
export DEBUG=true
```