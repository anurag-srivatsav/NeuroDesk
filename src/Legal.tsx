import React from 'react';
import { ArrowLeft, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

function Legal() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 px-6 py-20 font-sans">
      {/* Header Nav */}
     <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md shadow border-b border-gray-800">
  <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
    <Link to="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition">
      <ArrowLeft size={18} />
      Back
    </Link>

    <div className="flex items-center gap-2 text-white">
      <BrainCircuit size={20} />
      <span className="font-semibold text-sm">Neuronex Labs</span>
    </div>
  </div>
</header>


      {/* Main Content */}
      <main className="pt-32 max-w-5xl mx-auto space-y-24">
        {/* LEGAL NOTICE */}
        <section id="legal">
          <h2 className="text-3xl font-bold text-white mb-4">Legal Notice</h2>
          <p className="text-gray-400 leading-relaxed">
            Neuronex Labs is committed to ethical practices, transparency, and compliance. By accessing our services,
            you agree to the conditions described in the following sections.
          </p>
        </section>

        {/* PRIVACY POLICY */}
        <section id="privacy">
          <h2 className="text-3xl font-bold text-white mb-4">Privacy Policy</h2>
          <p className="text-gray-400 leading-relaxed">
            We value your privacy. Neuronex Labs collects minimal personal information necessary for the functioning of
            our platform. We never sell or misuse user data.
          </p>
          <p className="text-gray-400 mt-2">
            Data like emails and usage metrics are encrypted and securely stored. Users can request data deletion
            anytime by contacting support.
          </p>
        </section>

        {/* TERMS & CONDITIONS */}
        <section id="terms">
          <h2 className="text-3xl font-bold text-white mb-4">Terms & Conditions</h2>
          <p className="text-gray-400 leading-relaxed">
            By using our services, you agree to follow all applicable laws and to use Neuronex Labs for lawful purposes
            only. You are responsible for maintaining the confidentiality of your account.
          </p>
          <p className="text-gray-400 mt-2">
            We reserve the right to suspend accounts or services if terms are violated or misuse is detected.
          </p>
        </section>

        {/* LICENSE */}
        <section id="license">
          <h2 className="text-3xl font-bold text-white mb-4">License</h2>
          <p className="text-gray-400 leading-relaxed">
            All original content and technology provided by Neuronex Labs is licensed under a proprietary license unless
            otherwise stated.
          </p>
          <p className="text-gray-400 mt-2">
            Unauthorized reproduction, distribution, or reverse engineering of our products is strictly prohibited.
          </p>
        </section>

        {/* ABOUT NEURODEK AI */}
        <section id="about-ai">
          <h2 className="text-3xl font-bold text-white mb-4">About Neurodek AI</h2>
          <p className="text-gray-400 leading-relaxed">
            Neurodek AI is a desktop assistant designed for productivity, privacy, and local-first experiences. It
            runs natively on your machine, ensuring your data stays secure and offline.
          </p>
          <p className="text-gray-400 mt-2">
            Neurodek helps you automate tasks, summarize content, and generate context-aware outputs—without ever
            sending your personal data to external servers.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-32 text-center text-sm text-gray-600 border-t border-gray-800 pt-8">
        © {new Date().getFullYear()} Neuronex Labs. All rights reserved.
      </footer>
    </div>
  );
}

export default Legal;
