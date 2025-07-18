# AgentVerse

*A universe of specialized AI agents designed to amplify your potential.*

![AgentVerse Dashboard](https://i.imgur.com/3c8S42Z.png)

AgentVerse is a high-end, futuristic web platform that showcases a diverse collection of specialized AI agents. Built with React, TypeScript, and powered by the Google Gemini API, it provides an interactive experience where users can engage with different AI personas, each tailored for specific tasks in productivity, healthcare, education, and finance.

## ✨ Features

- **Interactive AI Agents**: Engage in real-time conversations with specialized AI agents.
- **Google Gemini API**: Powered by the 'gemini-2.5-flash' model for fast and intelligent responses.
- **Streaming Responses**: AI responses are streamed token-by-token for a fluid, conversational feel.
- **Unique Agent Personas**: Each agent has a unique `systemInstruction` that defines its personality and area of expertise.
- **Stunning 3D UI**: Agent cards feature 3D hover effects, creating an immersive user experience.
- **Modern & Responsive Design**: A sleek, dark-themed interface built with Tailwind CSS that looks great on all devices.
- **Categorized View**: Agents are neatly organized into categories for easy discovery.

## 🤖 The Agents

AgentVerse features a wide array of agents, including:

- **Personal Productivity**: Smart Email Responder, Meeting Summarizer, Task Automator.
- **Healthcare & Wellness**: Symptom Checker, Mental Health Companion, Fitness & Nutrition Coach.
- **Education & Learning**: Personalized Tutor, Language Learning Buddy, Research Paper Analyzer.
- **Financial & Legal**: Contract Analyzer, Finance Optimizer, Fraud Detection Bot.



## 🛠️ Technology Stack

- **Frontend**: React, TypeScript
- **AI**: Google Gemini API (`@google/genai`)
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG components
- **Module Loading**: ES Modules via import maps

## 📂 Project Structure

```
/
├── components/
│   ├── AgentCard.tsx           # 3D card for each agent
│   ├── AgentCategory.tsx       # Component to group agents
│   ├── AgentDetailView.tsx     # The interactive chat modal
│   ├── Header.tsx              # Main page header
│   └── Icons.tsx               # SVG icon components
├── App.tsx                     # Main application component
├── constants.tsx               # All agent definitions and system instructions
├── index.html                  # Main HTML file with import maps and styles
├── index.tsx                   # React entry point
├── metadata.json               # Application metadata
├── types.ts                    # TypeScript type definitions
└── README.md                   # You are here!
```

## 🚀 Getting Started

### Prerequisites

This project is designed to run in a web environment where ES modules are supported natively by the browser. The dependencies like React and `@google/genai` are loaded via an import map in `index.html`.

### API Key Configuration

The application requires a Google Gemini API key to function. The code is written to access the API key from an environment variable:

```javascript
// From components/AgentDetailView.tsx
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
```

For the application to work, `process.env.API_KEY` **must be set** in the deployment environment. The application will show an error message in the chat window if the key is not available.

**Note**: Do not hardcode your API key directly into the source code.

## ⚙️ How It Works

1.  **Agent Definition**: The `constants.tsx` file contains an array of `AGENTS`. Each agent object defines its `name`, `description`, `category`, and a crucial `systemInstruction`. This instruction primes the Gemini model to behave as a specific specialist (e.g., a contract analyzer or a fitness coach).

2.  **UI Rendering**: The main `App.tsx` component fetches the agents and renders them in their respective categories using the `AgentCard` component.

3.  **Interaction**: When a user clicks on an `AgentCard`, the `onSelect` handler sets the `selectedAgent` state in `App.tsx`.

4.  **Chat Modal**: This state change triggers the rendering of the `AgentDetailView` modal, which receives the selected agent's data.

5.  **Chat Initialization**: Inside `AgentDetailView`, a new `Chat` instance from the `@google/genai` SDK is created. The `systemInstruction` from the selected agent is passed during initialization, setting the context for the entire conversation.

6.  **Sending Messages**: When the user sends a message, the `sendMessageStream` method is called. This sends the user's input to the Gemini API.

7.  **Streaming Response**: The component then iterates over the asynchronous stream of response chunks. As each `chunk` arrives, its text is appended to the last message in the `messages` state, updating the UI in real-time and creating the "typing" effect.

## 💡 How to Add a New Agent

Adding a new agent to the AgentVerse is straightforward:

1.  **(Optional) Create an Icon**: If the new agent needs a unique icon, create a new React component for it in `components/Icons.tsx`.
2.  **Define the Agent**: Open `constants.tsx` and add a new object to the `AGENTS` array.
    -   Fill in the `id`, `name`, `description`, `category`, `icon`, and `color`.
    -   Most importantly, write a clear and concise `systemInstruction` that will guide the AI's behavior. This is the "soul" of your agent.

That's it! The application will automatically pick up the new agent and display it in the correct category.
