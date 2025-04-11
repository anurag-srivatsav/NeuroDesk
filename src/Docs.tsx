import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit } from 'lucide-react';

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'api', title: 'API Reference' },
  { id: 'faq', title: 'FAQs' },
];

function Docs() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 bg-black border-b border-zinc-800 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-6 h-6 text-purple-400" />
          <span className="text-lg font-semibold text-white tracking-tight">
            Neuronex Labs
          </span>
        </div>
      </nav>

      {/* Layout with Sidebar */}
      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="w-64 h-[calc(100vh-5rem)] sticky top-20 border-r border-zinc-800 bg-black/90 px-6 py-8 space-y-6 text-zinc-400">
          <nav className="space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block hover:text-purple-400 transition-colors font-medium"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-16 py-10 space-y-32 max-w-5xl mx-auto">
          {/* Introduction */}
          <section id="intro" className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">Welcome to Neurodek AI</h1>
              <p className="text-zinc-400 text-lg max-w-2xl">
                Learn about Neurodek AI's core desktop features, settings, and personalization options for an intelligent, offline-first assistant experience.
              </p>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Overview</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                <li>🗣️ <b>Voice Assistant</b>: Natural wake-word detection with seamless voice interactions</li>
                <li>📅 <b>Smart Scheduler</b>: Task and calendar automation powered by AI</li>
                <li>💻 <b>System Control</b>: Control apps, files, and system functions using voice or chat</li>
                <li>💬 <b>AI Chat</b>: Personality-driven conversations with Groq API</li>
                <li>⚙️ <b>Automation</b>: Email, browser, and task flows simplified</li>
                <li>🎵 <b>Media Integration</b>: Control Spotify and YouTube directly</li>
                <li>🎭 <b>Personality Modes</b>: Switch between Mentor, Friend, or Professional modes</li>
              </ul>
            </div>

            {/* Getting Started Overview */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                <li>👋 Say “Hey Neurodek” to activate the assistant</li>
                <li>🎙️ Use voice commands to control apps, media, and schedule events</li>
                <li>💬 Start chatting with the assistant to ask questions or give tasks</li>
                <li>🔑 Insert your Groq API key to enable advanced AI features</li>
              </ul>
            </div>

            {/* Settings */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Settings</h2>
              <p className="text-zinc-400">Customize your assistant experience easily:</p>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                <li>🧠 Choose assistant modes: Friendly, Professional, Mentor, etc.</li>
                <li>🎚️ Adjust wake word sensitivity and volume</li>
                <li>🎨 Customize appearance and voice style</li>
                <li>🔒 Manage privacy settings (fully offline by default)</li>
              </ul>
            </div>

            {/* Personality Modes */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Personality Modes</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                <li>😊 <b>Companion Mode</b>: Friendly and supportive</li>
                <li>💼 <b>Professional Mode</b>: Formal and task-focused</li>
                <li>📚 <b>Mentor Mode</b>: Educational and motivational</li>
                <li>😄 <b>Casual Friend Mode</b>: Fun and relaxed vibe</li>
              </ul>
            </div>

            {/* Privacy & Security */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Privacy & Security</h2>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                <li>🔐 <b>Local Data Only</b>: Nothing is uploaded — your data stays on your device</li>
                <li>☁️ <b>No Cloud Dependency</b>: All functionality works offline</li>
                <li>🛡️ <b>Secure API Key Handling</b>: Your Groq API key is stored safely</li>
              </ul>
            </div>
          </section>

          {/* Getting Started Steps */}
          <section id="getting-started" className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Getting Started</h2>
            <p className="text-zinc-400 text-base">
              Follow these simple steps to launch your AI assistant powered by Neuronex Labs.
            </p>

            <ol className="relative border-l border-zinc-700 pl-6 space-y-10">
              {[
                {
                  icon: '🧑‍💻',
                  title: 'Sign up & Create Workspace',
                  desc: 'Register on our platform and set up your AI assistant workspace in just a few clicks.'
                },
                {
                  icon: '📧',
                  title: 'Verify & Complete Profile',
                  desc: 'Confirm your email address and fill in profile details to unlock full access.'
                },
                {
                  icon: '🛠️',
                  title: 'Create Your AI Assistant',
                  desc: 'From your dashboard, define assistant behaviors, personality, and capabilities.'
                },
                {
                  icon: '🔑',
                  title: 'Get Your API Key from Groq',
                  desc: 'Head over to the Groq Console, log in, and generate your API key from the API section.'
                },
                {
                  icon: '⚙️',
                  title: 'Start Building with the API',
                  desc: 'Use your Groq key to send messages, retrieve data, and power your assistant using RESTful APIs.'
                },
              ].map((step, i) => (
                <li key={i} className="relative pl-6">
                  <div className="absolute left-[-0.6rem] top-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-zinc-900"></div>
                  <div className="text-white font-semibold text-lg mb-1">
                    <span className="text-purple-400 mr-2">{step.icon}</span> {`${i + 1}. ${step.title}`}
                  </div>
                  <p className="text-zinc-400 text-sm">{step.desc}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* API Reference */}
          <section id="api">
            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">API Reference</h2>
            <p className="text-zinc-400 mb-4 max-w-2xl">
              Our REST API gives you full control over your assistant. Authenticated requests are required.
            </p>
            <pre className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-sm overflow-x-auto text-purple-200">
{`GET /v1/assistant/messages
Authorization: Bearer YOUR_API_KEY

Response:
{
  "messages": [
    { "role": "user", "content": "Hello" },
    { "role": "assistant", "content": "Hi, how can I assist you?" }
  ]
}`}
            </pre>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">FAQs</h2>
            <div className="space-y-6 text-zinc-300">
              <div>
                <h3 className="font-bold text-white">How do I get an API key?</h3>
                <p>Sign in to your dashboard, navigate to API settings, and generate your key.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">Is there a free tier?</h3>
                <p>Yes, our free tier includes 1000 monthly requests and access to all core features.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Docs;
