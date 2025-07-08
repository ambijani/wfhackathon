require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const docs = require('./docs'); // docs is a plain object
const cors = require('cors');
const app = express();

app.use(cors()); // Enables CORS for all origins
app.use(express.json());
app.use(bodyParser.json());

// Initialize OpenAI client with API key from .env
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Function to generate an explanation using OpenAI
async function generateExplanation(pageLabel, question, conversation) {
  let doc = docs[pageLabel];
  if (!doc && pageLabel && !pageLabel.startsWith('/')) {
    doc = docs['/' + pageLabel];
  }
  if (!doc && pageLabel && pageLabel.startsWith('/')) {
    doc = docs[pageLabel.slice(1)];
  }
  if (!doc) {
    const available = Object.keys(docs).join(', ');
    return `Sorry, I couldn't find documentation for "${pageLabel}". Available docs: ${available}`;
  }

  const docContent = doc.content;
  const context = `Documentation for ${doc.title}:\n${docContent}\n\nConversation History:\n${conversation}\n\nUser Query:\n${question}`;

  const messages = [
    {
      role: 'system',
      content: 'You are a helpful documentation assistant. Use the provided documentation and conversation history to answer the user query.'
    },
    { role: 'user', content: context }
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    max_tokens: 1024,
    temperature: 0.7,
  });

  return response.choices[0].message.content.trim();
}

// Route to handle incoming chatbot queries
app.post('/chatbot', async (req, res) => {
  const { question, pageLabel, page, conversation = [] } = req.body;
  const conversationHistory = conversation.map(msg => `${msg.from}: ${msg.text}`).join('\n');

  console.log('[INFO] Incoming Chatbot Request:', { question, pageLabel });

  try {
    const answer = await generateExplanation(pageLabel, question, conversationHistory);
    res.json({ answer });
  } catch (err) {
    console.error('[ERROR] Failed to generate explanation:', err.message);
    res.status(500).json({ answer: "Sorry, there was an error generating a response." });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`OpenAI chatbot backend running on port ${PORT}`);
});
