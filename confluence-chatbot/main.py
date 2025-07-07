from google import genai
from google.genai import types
from flask import Flask, request, jsonify
import os
import docs  # Import the docs file containing the documentation data

# Initialize Flask app
app = Flask(__name__)

# Initialize the GenAI Client (for Gemini API)
client = genai.Client(
    vertexai=True,
    project="wf-hack25dfw-642",  # Your project ID
    location="global",  # Your region (you can use 'global' or specify a region)
)

# Function to generate an explanation using Gemini
def generate_explanation(page_label, question, conversation):
    # Get the doc content based on the page label
    doc = docs.docs.get(page_label, None)
    if not doc:
        return "Sorry, I couldn't find documentation for this page."
    
    # Extract the content for the page
    doc_content = doc['content']
    
    # Combine the documentation content, conversation, and user question into a single context
    context = f"Documentation for {doc['title']}:\n{doc_content}\n\nConversation History:\n{conversation}\n\nUser Query:\n{question}"
    
    # Create the content as a list of parts (wrapped inside the Part class)
    contents = [
        types.Content(
            role="user",
            parts=[types.Part(text=context)]  # Send the context, conversation, and user input together
        )
    ]
    
    # Configure the generation settings
    generate_content_config = types.GenerateContentConfig(
        temperature=0.7,  # Adjust for creativity
        top_p=1,
        seed=0,
        max_output_tokens=1024,  # Adjust for response length
    )

    # Generate the response stream and return the output
    for chunk in client.models.generate_content_stream(
        model="gemini-2.5-flash",  # Ensure this model is available for your project
        contents=contents,
        config=generate_content_config,
    ):
        return chunk.text  # Output the response text

# Route to handle incoming chatbot queries
@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    question = data.get('question')  # The user's question
    page_label = data.get('pageLabel')  # The human-readable page label
    page = data.get('page')  # The page identifier (e.g., '/doc1', '/doc2/hooks')
    conversation = data.get('conversation', [])  # The conversation history

    # Join conversation messages to provide full context
    conversation_history = "\n".join([f"{msg['from']}: {msg['text']}" for msg in conversation])
    
    # Call the function to generate the explanation
    explanation = generate_explanation(page_label, question, conversation_history)

    # Return the generated explanation to the frontend
    return jsonify({"answer": explanation})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
    app.run(debug=True)
