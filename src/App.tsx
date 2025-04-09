import React, { useEffect, useState } from 'react';
import {
  Brain,
  Calendar,
  Command,
  Download,
  ExternalLink,
  Github,
  Lock,
  Mail,
  MessageSquare,
  Mic,
  Music2,
  Play,
  Settings,
  Shield,
  Sparkles,
  User,
  Volume2,
  Youtube,
  Menu,
  X,
  Heart,
  Briefcase,
  Home,
  GraduationCap,
  Coffee,
  Loader2,
  CheckCircle2,Video, Film, CameraVideo
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'initial' | 'downloading' | 'complete'>('initial');

  const handleDownload = () => {
    setShowDownloadModal(true);
    setDownloadStatus('downloading');
    
    // Simulate download process
    setTimeout(() => {
      setDownloadStatus('complete');
    }, 3000);
  };

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Parallax effect
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = 0.5;
        const offset = window.pageYOffset * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
    };

    // Navbar scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleParallax);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              {downloadStatus === 'downloading' ? (
                <>
                  <Loader2 className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-spin" />
                  <h3 className="text-xl font-semibold mb-2">Hang Tight!</h3>
                  <p className="text-gray-400 mb-4">Our developers are hard at work on the desktop version</p>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">you're on the list and we’ll let you know as soon as it’s ready!</h3>
                  <p className="text-gray-400 mb-4">While you wait, check out our open-source version:</p>
                  <a 
                    href="https://github.com/anurag-srivatsav/Desktop_AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">NeuroDesk</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#who-its-for" className="hover:text-purple-400 transition-colors">Who It's For</a>
              <a href="#privacy" className="hover:text-purple-400 transition-colors">Privacy</a>
              <button 
                onClick={handleDownload}
                className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2"
              >
                <Download size={16} />
                Download
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="flex flex-col gap-4 py-4">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#who-its-for" className="hover:text-purple-400 transition-colors">Who It's For</a>
              <a href="#privacy" className="hover:text-purple-400 transition-colors">Privacy</a>
              <button 
                onClick={handleDownload}
                className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2 justify-center"
              >
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Meet Your Ultimate Desktop AI Personal Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Voice-activated. Intelligently responsive. Perfectly personal.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={handleDownload}
                className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download Now
              </button>
              <a
                href="https://github.com/anurag-srivatsav/Desktop_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Mic className="text-purple-400" />, title: "Voice Assistant", desc: "Natural wake word detection with seamless voice commands" },
              { icon: <Calendar className="text-purple-400" />, title: "Smart Schedule", desc: "Intelligent task management and calendar organization" },
              { icon: <Command className="text-purple-400" />, title: "System Control", desc: "Complete control over your Windows system" },
              { icon: <MessageSquare className="text-purple-400" />, title: "AI Chat", desc: "Powered by Groq API for intelligent conversations" },
              { icon: <Settings className="text-purple-400" />, title: "Automation", desc: "Browser and email task automation" },
              { icon: <Music2 className="text-purple-400" />, title: "Media Integration", desc: "Spotify and YouTube controls" }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg hover:bg-gray-800 transition-all fade-in">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personality Modes Section */}
      <section id="personalities" className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Personalize Your Experience</h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Choose from multiple personality modes to match your needs and preferences. Your AI assistant adapts to your lifestyle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="text-pink-400" />,
                title: "Companion Mode",
                desc: "A friendly and empathetic presence, always ready to listen and support you emotionally",
                color: "from-pink-600/20 to-purple-600/20",
                highlight: "text-pink-400"
              },
              {
                icon: <Briefcase className="text-blue-400" />,
                title: "Professional Mode",
                desc: "Focused, efficient, and formal - perfect for work environments and business tasks",
                color: "from-blue-600/20 to-purple-600/20",
                highlight: "text-blue-400"
              },
              {
                icon: <GraduationCap className="text-green-400" />,
                title: "Mentor Mode",
                desc: "Patient, educational, and encouraging - helps you learn and grow",
                color: "from-green-600/20 to-purple-600/20",
                highlight: "text-green-400"
              },
              {
                icon: <Coffee className="text-amber-400" />,
                title: "Casual Friend Mode",
                desc: "Relaxed, fun, and casual - like chatting with a close friend",
                color: "from-amber-600/20 to-purple-600/20",
                highlight: "text-amber-400"
              }
            ].map((mode, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl bg-gradient-to-br ${mode.color} backdrop-blur-lg hover:scale-105 transition-all duration-300 fade-in border border-gray-700/50`}
              >
                <div className={`w-12 h-12 flex items-center justify-center mb-4 ${mode.highlight}`}>
                  {mode.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${mode.highlight}`}>{mode.title}</h3>
                <p className="text-gray-300">{mode.desc}</p>
                <button className={`mt-4 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all text-sm flex items-center gap-2 ${mode.highlight}`}>
                  <Settings size={14} />
                  Customize Mode
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who-its-for" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <User />, title: "Students", features: ["Study Planner", "Smart Reminders", "Research Assistant"] },
              { icon: <Brain />, title: "Professionals", features: ["Meeting Scheduler", "Email Composer", "Task Automation"] },
              { icon: <Sparkles />, title: "General Users", features: ["Media Control", "System Utilities", "Daily Assistant"] }
            ].map((user, index) => (
              <div key={index} className="p-8 rounded-xl bg-gradient-to-b from-purple-900/20 to-gray-900/20 backdrop-blur-lg fade-in">
                <div className="w-12 h-12 flex items-center justify-center mb-4 text-purple-400">
                  {user.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{user.title}</h3>
                <ul className="space-y-2">
                  {user.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <Shield className="w-16 h-16 text-purple-400 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-8">Privacy & Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-gray-800/30">
                <Lock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Data</h3>
                <p className="text-gray-400">Your data never leaves your device</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800/30">
                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Cloud Storage</h3>
                <p className="text-gray-400">Complete offline functionality</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800/30">
                <Lock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure APIs</h3>
                <p className="text-gray-400">Protected API key handling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Demo Videos Section */}
<section id="demos" className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center fade-in">
      
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      </div>

      <h2 className="text-4xl font-bold text-white mb-4"> Demo Videos</h2>
      <p className="text-gray-400 mb-12">See our NeuroDesk in action — real-time voice commands, task management, and more.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Video 1 */}
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/JFA4c6sBC70?si=7-HsP0qIvKQHan7M" 
            title="AI Assistant Demo 1" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
        
        {/* Video 2 */}
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/4lRRtHL5XWM?si=yCqFHyTkdB9T7r02" 
            title="AI Assistant Demo 2" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>

        {/* Video 3 */}
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3" 
            title="AI Assistant Demo 3" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section id="pricing" className="py-20 bg-gray-950 text-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center mb-12 fade-in">
      <h2 className="text-4xl font-bold mb-4">Flexible Pricing for Everyone</h2>
      <p className="text-gray-400">Choose a plan that fits your needs—whether you're just exploring or going all in.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      {/* Free Plan */}
      <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">Free</h3>
        <p className="text-4xl font-bold mb-6">$0<span className="text-base font-normal text-gray-400">/mo</span></p>
        <ul className="text-gray-400 space-y-3 mb-8">
          <li>✔️ Basic LLM Access</li>
          <li>✔️ Regular Robotic Voice</li>
          <li>✔️ Meeting Scheduler</li>
          <li>✔️ Email Composer,flights booking etc..</li>
          <li>✔️ Task Automation</li>
        </ul>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl transition">Get Started</button>
      </div>

      {/* Pro Plan */}
      <div className="p-8 bg-gradient-to-br from-purple-800 to-purple-600 rounded-2xl shadow-2xl transform scale-105 border-2 border-purple-400">
        <h3 className="text-2xl font-semibold mb-4 text-white">Pro</h3>
        <p className="text-4xl font-bold mb-6">$29<span className="text-base font-normal text-gray-200">/mo</span></p>
        <ul className="text-white space-y-3 mb-8">
          <li>✔️ Advanced LLMs Access</li>
          <li>✔️ Companion Personalities</li>
          <li>✔️ Voice Cloning (1 Member)</li>
          <li>✔️ Premium Voices</li>
          <li>✔️ Smart Suggestions</li>
        </ul>
        <button className="w-full bg-white text-purple-700 font-bold py-2 rounded-xl transition hover:bg-purple-200">Upgrade to Pro</button>
      </div>

      {/* Ultimate Plan */}
      <div className="p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">Ultimate</h3>
        <p className="text-4xl font-bold mb-6">$99<span className="text-base font-normal text-gray-400">/mo</span></p>
        <ul className="text-gray-400 space-y-3 mb-8">
          <li>✔️ All Pro Features</li>
          <li>✔️ Multiple Personality Modes</li>
          <li>✔️ Clone Voice of Family or Partner</li>
          <li>✔️ Custom Companionship Settings</li>
          <li>✔️ MCP, Deep Customization APIs</li>
        </ul>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl transition">Go Ultimate</button>
      </div>

    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your PC Experience?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who have already upgraded their Windows experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDownload}
                className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2 justify-center"
              >
                <Download size={20} />
                Download for Windows
              </button>
              <a
                href="https://github.com/anurag-srivatsav/Desktop_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2 justify-center"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Company</a></li>
                <li><a href="#" className="hover:text-purple-400">Team</a></li>
                <li><a href="#" className="hover:text-purple-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400">API</a></li>
                <li><a href="#" className="hover:text-purple-400">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400">License</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a 
                    href="https://github.com/anurag-srivatsav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 flex items-center gap-2"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 flex items-center gap-2">
                    <Mail size={16} /> Email
                  </a>
                </li>
                <li>
                  <a href="blog.html" className="hover:text-purple-400 flex items-center gap-2" target="_blank">
                    <ExternalLink size={16} /> Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 NeuroDesk- AI Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
