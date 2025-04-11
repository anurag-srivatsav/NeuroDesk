import React from 'react';
import { ArrowLeft, BrainCircuit, Calendar, Users, Download, Star, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function Company() {
  const projects = [
    {
      title: "NeuroDesk : Meet Your Ultimate Desktop AI Personal Assistant",
      description: "An intelligent desktop companion with voice command support, LLM-based conversations, and automated daily tasks.",
      date: "Completed Jan 2025",
      users: "1.2M+ users",
      downloads: "850K+ downloads",
      rating: "4.8 / 5",
      category: "Desktop AI",
      image: "https://theacademic.com/wp-content/uploads/2024/10/312_article_pic.png",
      link: "https://neurodesk.ai"
    },
    {
      title: "IGITA - Divine Gods AI",
      description: "The world's first spiritual AI app blending ancient Indian Itihasas, slokas, and epics like the Ramayana into an immersive experience.",
      date: "Deployed Nov 2024",
      users: "750K+ users",
      downloads: "600K+ downloads",
      rating: "4.7 / 5",
      category: "Spiritual Intelligence",
      image: "https://www.securities.io/wp-content/uploads/2024/03/DALL%C2%B7E-2024-03-21-09.08.33-A-highly-detailed-and-realistic-image-showing-an-advanced-robot-seated-at-a-modern-sleek-desk-surrounded-by-multiple-screens-displaying-complex-algor.webp",
      link: "https://igita.ai"
    },
    {
      title: "MedVision AI",
      description: "A smart medical assistant with ML-based image diagnosis, real-time MedCam scanner, and health tracking features.",
      date: "Launched Aug 2024",
      users: "300K+ users",
      downloads: "250K+ downloads",
      rating: "4.9 / 5",
      category: "Medical Tech AI",
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/top-5-masters-programmes-in-robotics-and-ai-to-study-in-the-uk-251130433-16x9.jpg?VersionId=_HETADBSN4jYeyEzYu9TOpMlYfUILroz",
      link: "https://medvision.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 py-4 bg-gray-900/80 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="flex items-center gap-2 ml-auto">
              <BrainCircuit className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-bold">Neuronex Labs</span>
            </div>
          </div>
        </div>
      </nav>

    {/* Hero Section */}
<section className="pt-36 pb-24 bg-gradient-to-b from-purple-900/30 to-gray-900">
  <div className="container mx-auto px-4 text-center animate-fade-in">
    <div className="inline-flex items-center gap-3 justify-center mb-4">
      <BrainCircuit className="w-8 h-8 text-purple-400 animate-pulse" />
      <span className="uppercase tracking-wider text-sm text-purple-300 font-medium">
        AI Innovation Hub
      </span>
    </div>
    <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
      <span className="text-purple-400">Innovating</span> the{" "}
      <span className="text-blue-400">Future</span>
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      At <span className="text-purple-400 font-semibold">Neuronex Labs</span>, we build
      next-gen <span className="text-green-400 font-medium">AI systems</span> redefining industries across{" "}
      <span className="text-yellow-400">healthcare</span>,{" "}
      <span className="text-pink-400">retail</span>, and{" "}
      <span className="text-cyan-400">defense</span>.
    </p>
  </div>
</section>


      {/* Project Showcase */}
      <section className="py-16 space-y-20">
        <div className="container mx-auto px-4">
         <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-fade-in">
   Our Real-Time Projects
</h2>

          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-8 items-center border-b border-gray-800 pb-10`}
            >
              {/* Image */}
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl shadow-lg object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-4">
                <span className="text-purple-400 text-sm uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 text-sm text-gray-400 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    {project.users}
                  </div>
                  <div className="flex items-center gap-2">
                    <Download size={16} />
                    {project.downloads}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} />
                    {project.rating}
                  </div>
                </div>

                {/* Button Below */}
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    Visit Website
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* Team Section */}
<section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900/20">
  <div className="container mx-auto px-4">
   <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 animate-slide-in">
  ✨ Meet the Founders
</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Founder Card */}
      {[{
        name: "Anurag Srivastav Thammera",
        role: "Founder",
        desc: "Visionary tech architect driving innovation across AI, robotics, and real-time systems.",
        image: "https://res.cloudinary.com/dvlgixtg8/image/upload/v1744353942/whsmpedzdjl63l4jpe7y.png"
      },
      {
        name: "Lalith Sreevari",
        role: "Co-Founder",
        desc: "Product strategist and team leader focused on creating intuitive AI experiences at scale.",
        image: "https://api.dicebear.com/7.x/initials/svg?seed=Lalith"
      }].map((founder, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-purple-800/50"
        >
          <div className="flex flex-col items-center space-y-5 animate-fade-in">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-28 h-28 rounded-full border-4 border-purple-500 shadow-lg"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white">{founder.name}</h3>
              <p className="text-purple-400 font-medium">{founder.role}</p>
              <p className="text-gray-300 mt-3 text-sm">{founder.desc}</p>
            </div>
            <div className="flex justify-center gap-5 mt-4">
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

export default Company;
