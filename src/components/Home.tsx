import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { title: 'Events', description: 'Join coding contests and workshops', link: '/events', icon: '🎉' },
    { title: 'Resources', description: 'DSA roadmap and practice problems', link: '/resources', icon: '📖' },
    { title: 'Community', description: 'Connect with fellow coders', link: '/community', icon: '👥' },
    { title: 'About Us', description: 'Meet our coordinators and team', link: '/about', icon: '🌟' },
    { title: 'Contact', description: 'Get in touch with us', link: '/contact', icon: '💬' },
    { title: 'Innovation', description: 'AI chatbot and collaboration tools', link: '/innovation', icon: '🚀' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white bg-opacity-5 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="container mx-auto text-center px-4 py-20 relative z-10">
          <div className="mb-8">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-green-600 shadow-2xl border-4 border-green-500">
              GFG
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent drop-shadow-lg">
            GFG Campus Club
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Empowering students with cutting-edge coding skills and building a vibrant community of passionate developers
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/events"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-xl border-2 border-green-600"
            >
              🚀 Join Our Events
            </Link>
            <Link
              to="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 hover:scale-105 transition-all duration-300"
            >
              📚 Explore Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="text-center mb-20">
            <div className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Welcome to Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Shape Your Future in Tech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of passionate coders shaping the future through innovation, excellence, and meaningful community collaboration.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More
                  <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-12">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-green-100">Active Members</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-green-100">Events Hosted</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                <div className="text-green-100">Projects Built</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                <div className="text-green-100">Workshops</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-br from-green-50 to-white rounded-2xl p-16 shadow-xl border border-green-200">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Start Your Coding Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Join our vibrant community and unlock your potential in the world of programming. Connect, learn, and grow with fellow developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/events"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-green-800 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                🎯 Join Events Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-600 text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-300"
              >
                📞 Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;