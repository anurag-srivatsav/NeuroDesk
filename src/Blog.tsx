import React from 'react';
import { ArrowLeft, Brain, Calendar, Clock,BrainCircuit  } from 'lucide-react';
import { Link } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    {
      title: "The Evolution of AI Assistants",
      excerpt: "Exploring how AI assistants have transformed from simple command responders to intelligent personal companions.",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      category: "AI Technology"
    },
    {
      title: "Voice Recognition: The Next Frontier",
      excerpt: "Deep dive into the latest advancements in voice recognition technology and its implementation in desktop assistants.",
      date: "March 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      category: "Technology"
    },
    {
      title: "Personalizing Your AI Experience",
      excerpt: "Learn how to customize your AI assistant to match your personality and workflow preferences.",
      date: "March 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      category: "Tutorials"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
     <nav className="fixed w-full z-50 py-4 bg-gray-900/80 backdrop-blur-lg shadow-lg">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      <div className="flex items-center gap-2">
        <BrainCircuit  className="w-6 h-6 text-purple-400" />
        <span className="text-lg font-bold text-white">Neuronex Labs</span>
      </div>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-900/20 to-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">Latest Updates & Insights</h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Discover the latest news, tutorials, and insights about AI technology and personal assistance.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 hover:text-purple-400 transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* Newsletter Section */}
<section className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-purple-900/20">
  <div className="container mx-auto px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
        Subscribe to our newsletter for the latest updates, tips, and insights.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 w-full"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all mt-2 sm:mt-0 w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</section>
    </div>
  );
}

export default Blog;
