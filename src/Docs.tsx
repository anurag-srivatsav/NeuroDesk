import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit, Menu, X } from 'lucide-react';

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'api', title: 'API Reference' },
  { id: 'faq', title: 'FAQs' },
];

function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 py-3 px-3 sm:px-4 bg-black border-b border-zinc-800 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-purple-400" />
          <span className="text-base font-semibold text-white tracking-tight">
            Neuronex Labs
          </span>
        </div>
        <button
          className="sm:hidden text-white"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Layout with Sidebar */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 w-56 sm:w-64 h-full border-r border-zinc-800 bg-black px-4 py-6 space-y-4 text-white transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 transition-transform duration-300 z-50 sm:sticky sm:top-16`}
        >
          <nav className="space-y-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-base hover:text-purple-300 transition-colors font-medium"
                onClick={() => setIsSidebarOpen(false)}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-40 sm:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 px-3 sm:px-4 md:px-6 py-6 space-y-12 sm:space-y-16 w-full max-w-full mx-auto">
          {/* Introduction */}
          <section id="intro" className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Welcome to Neurodek AI
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl">
                Learn about Neurodek AI's core desktop features, settings, and personalization options for an intelligent, offline-first assistant experience.
              </p>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-white">Overview</h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-1 text-xs sm:text-sm">
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
              <h2 className="text-lg sm:text-xl font-semibold text-white">Getting Started</h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-1 text-xs sm:text-sm">
                <li>👋 Say “Hey Neurodek” to activate the assistant</li>
                <li>🎙️ Use voice commands to control apps, media, and schedule events</li>
                <li>💬 Start chatting with the assistant to ask questions or give tasks</li>
                <li>🔑 Insert your Groq API key to enable advanced AI features</li>
              </ul>
            </div>

            {/* Settings */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-white">Settings</h2>
              <p className="text-zinc-300 text-xs sm:text-sm">Customize your assistant experience easily:</p>
              <ul className="list-disc list-inside text-zinc-300 space-y-1 text-xs sm:text-sm">
                <li>🧠 Choose assistant modes: Friendly, Professional, Mentor, etc.</li>
                <li>🎚️ Adjust wake word sensitivity and volume</li>
                <li>🎨 Customize appearance and voice style</li>
                <li>🔒 Manage privacy settings (fully offline by default)</li>
              </ul>
            </div>

            {/* Personality Modes */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-white">Personality Modes</h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-1 text-xs sm:text-sm">
                <li>😊 <b>Companion Mode</b>: Friendly and supportive</li>
                <li>💼 <b>Professional Mode</b>: Formal and task-focused</li>
                <li>📚 <b>Mentor Mode</b>: Educational and motivational</li>
                <li>😄 <b>Casual Friend Mode</b>: Fun and relaxed vibe</li>
              </ul>
            </div>

            {/* Privacy & Security */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold text-white">Privacy & Security</h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-1 text-xs sm:text-sm">
                <li>🔐 <b>Local Data Only</b>: Nothing is uploaded — your data stays on your device</li>
                <li>☁️ <b>No Cloud Dependency</b>: All functionality works offline</li>
                <li>🛡️ <b>Secure API Key Handling</b>: Your Groq API key is stored safely</li>
              </ul>
            </div>
          </section>

          {/* Getting Started Steps */}
          <section id="getting-started" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Getting Started</h2>
            <p className="text-zinc-300 text-xs sm:text-sm">
              Follow these simple steps to launch your AI assistant powered by Neuronex Labs.
            </p>

            <ol className="relative border-l border-zinc-700 pl-5 space-y-6">
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
                <li key={i} className="relative pl-5">
                  <div className="absolute left-[-0.5rem] top-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-zinc-900"></div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1">
                    <span className="text-purple-400 mr-2">{step.icon}</span> {`${i + 1}. ${step.title}`}
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm">{step.desc}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* API Reference */}
          <section id="api">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-tight">API Reference</h2>
            <p className="text-zinc-300 mb-3 text-xs sm:text-sm max-w-xl">
              Our REST API gives you full control over your assistant. Authenticated requests are required.
            </p>
            <pre className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-xs overflow-x-auto text-purple-200">
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
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-tight">FAQs</h2>
            <div className="space-y-4 text-zinc-300 text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">How do I get an API key?</h3>
                <p>Sign in to your dashboard, navigate to API settings, and generate your key.</p>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">Is there a free tier?</h3>
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
