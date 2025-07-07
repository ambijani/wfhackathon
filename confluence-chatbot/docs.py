# docs.py

docs = {
    "/doc1": {
        "title": "Setting up BlazeMeter",
        "content": """
        BlazeMeter is a cloud-based load testing platform. 
        Steps:
        1. Sign up at blazemeter.com.
        2. Install the BlazeMeter Chrome Extension.
        3. Create a test (URL, JMeter, Taurus, etc.).
        4. Run the test and monitor results in real time.
        5. Analyze performance metrics and download reports.
        
        Tips:
        - Import JMeter scripts for advanced scenarios.
        - Integrate with CI/CD tools like Jenkins.
        
        Warnings:
        - Do not test production systems without permission!
        """
    },
    "/doc2": {
        "title": "Setting up React",
        "content": """
        React is a popular JavaScript library for building user interfaces.
        Steps:
        1. Install Node.js from nodejs.org.
        2. Run 'npx create-react-app my-app'.
        3. cd my-app
        4. npm start to launch the app.
        5. Edit src/App.js to start building your UI.
        
        Tips:
        - Use VS Code for a great experience.
        - Use functional components and hooks.
        """
    },
    "/doc2/hooks": {
        "title": "React Hooks",
        "content": """
        React Hooks let you use state and other features in function components.
        - useState: Adds local state.
        - useEffect: Runs side effects.
        - useContext: Accesses context values.
        - Custom hooks: Reuse logic across components.
        
        Tip: Always call hooks at the top level of your component.
        """
    },
    "/doc2/routing": {
        "title": "React Routing",
        "content": """
        React Router enables navigation in React apps.
        Steps:
        1. npm install react-router-dom
        2. Wrap your app in <BrowserRouter>
        3. Use <Routes> and <Route> for pages.
        4. Use <Link> or <NavLink> for navigation.
        
        Tip: Use <NavLink> for active link highlighting.
        """
    },
    "/doc3": {
        "title": "Integrating with Jira",
        "content": """
        Integrate Confluence with Jira for seamless project management.
        Steps:
        1. Go to Confluence settings > Application Links.
        2. Enter your Jira site URL.
        3. Authorize the connection.
        4. Use the Jira Issues macro to display issues.
        5. Create Jira issues from Confluence.
        
        Tip: Use labels and smart links to connect related issues and pages.
        """
    },
    "/doc3/automation": {
        "title": "Jira Automation",
        "content": """
        Jira Automation lets you automate repetitive tasks.
        Steps:
        1. Go to Project Settings > Automation.
        2. Choose a template or create a custom rule.
        3. Set triggers, conditions, and actions.
        4. Test and enable your rule.
        
        Tip: Use automation to auto-assign issues or send notifications.
        """
    },
    "/doc4": {
        "title": "Writing Effective Documentation",
        "content": """
        Best practices for documentation:
        - Know your audience.
        - Use clear headings and bullet points.
        - Keep docs up to date.
        - Include examples and diagrams.
        - Link to related pages.
        
        Tip: Use Confluence templates for consistency.
        """
    },
    "/doc5": {
        "title": "User Management",
        "content": """
        Manage users in Confluence:
        - Go to Site Administration > Users.
        - Invite new users by email.
        - Assign users to groups.
        - Deactivate or remove users as needed.
        
        Tip: Use groups for efficient permission management.
        """
    },
    "/doc6": {
        "title": "Security & Permissions",
        "content": """
        Confluence security and permissions:
        - Set space permissions for groups and users.
        - Restrict page access.
        - Use audit logs to track changes.
        - Enable SSO and 2FA.
        
        Tip: Review permissions regularly.
        """
    },
    "/doc7": {
        "title": "Onboarding New Team Members",
        "content": """
        Onboarding checklist:
        1. Send a welcome email.
        2. Grant access to spaces and tools.
        3. Assign a mentor.
        4. Schedule intro meetings.
        5. Share documentation on workflows.
        
        Tip: Create an onboarding space in Confluence.
        """
    },
    "/doc8": {
        "title": "Macros & Templates",
        "content": """
        Macros and templates in Confluence:
        - Macros: Add dynamic content (tables of contents, task lists, Jira issues).
        - Templates: Use built-in or custom templates for consistency.
        
        Tip: Combine macros and templates for powerful workflows.
        """
    },
    "/doc9": {
        "title": "FAQ & Troubleshooting",
        "content": """
        FAQ:
        - How do I reset my password? Click 'Forgot password' on the login page.
        - Why can't I see a page? You may not have permission.
        - How do I export a page? Use the 'Export' option.
        
        Troubleshooting:
        - Page not loading? Check your internet connection.
        - Edits not saving? Make sure you are logged in.
        
        Tip: Check the Confluence Community forums for solutions.
        """
    }
}

# You can add more documentation as needed, following the same structure.
