import React from 'react';
import { ArrowLeft, Linkedin, Twitter, BrainCircuit,Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Anurag',
    role: 'Founder',
    bio: 'Architect of AspireX Labs, focused on building AI-driven products that scale globally.',
    image: 'https://res.cloudinary.com/dvlgixtg8/image/upload/v1744353942/whsmpedzdjl63l4jpe7y.png',
    linkedin: 'https://www.linkedin.com/in/anuragsrivatsav/',
    twitter: 'https://x.com/AnuragSrivatsa4',
  },
  {
    name: 'Lalith',
    role: 'Co-Founder',
    bio: 'Expert in product strategy and user experience, driving innovation from idea to impact.',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Lalith',
    linkedin: 'https://www.linkedin.com/in/lalithsreevari',
    twitter: 'https://x.com/Lalithx86',
  },
  {
    name: 'Sneha',
    role: 'AI Research Lead',
    bio: 'Heads our AI research team, developing cutting-edge models for real-world applications.',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Sneha',
    linkedin: '#',
    twitter: '#',
  }
];

function Team() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 py-4 bg-gray-900/90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-bold tracking-wide text-white">AspireX Labs</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-900/20 to-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-4 animate-slide-in flex items-center justify-center gap-3">
  <span className="text-5xl">🧠</span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
    Brains Behind AspireX Labs
  </span>
</h2>


          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We’re a group of innovators building AI products that are reshaping the future.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800/40 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-purple-700/40 transition-shadow duration-300 animate-fade-in"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full border-4 border-purple-500 mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-purple-400 font-medium">{member.role}</p>
              <p className="text-gray-400 text-sm mt-2">{member.bio}</p>
              <div className="flex gap-4 mt-4">
                <a href={member.linkedin} className="text-purple-400 hover:text-purple-300 transition">
                  <Linkedin />
                </a>
                <a href={member.twitter} className="text-purple-400 hover:text-purple-300 transition">
                  <Twitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;
