const About = () => {
  const coordinators = [
    { name: 'John Doe', role: 'President', image: 'https://via.placeholder.com/150', color: 'from-blue-400 to-blue-600' },
    { name: 'Jane Smith', role: 'Vice President', image: 'https://via.placeholder.com/150', color: 'from-purple-400 to-purple-600' },
    { name: 'Bob Johnson', role: 'Technical Lead', image: 'https://via.placeholder.com/150', color: 'from-green-400 to-green-600' },
  ];

  const stats = [
    { number: '500+', label: 'Active Members' },
    { number: '50+', label: 'Events Conducted' },
    { number: '1000+', label: 'Problems Solved' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About GFG Campus Club 🌟</h1>
          <p className="text-xl opacity-90">Where Passion Meets Innovation!</p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-105 transition-transform duration-300">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🎯 Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create a vibrant community of passionate coders, fostering innovation, collaboration, and excellence in programming. 
              We're not just a club – we're a family that grows together! 💪
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">🚀 Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white p-3 rounded-full">📚</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Skill Development</h3>
                <p className="text-gray-600">Regular workshops and contests to enhance coding skills</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 text-white p-3 rounded-full">🤝</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Community Building</h3>
                <p className="text-gray-600">Creating a supportive network of like-minded individuals</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white p-3 rounded-full">💡</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600">Encouraging creative problem-solving and new ideas</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-500 text-white p-3 rounded-full">🎓</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Career Growth</h3>
                <p className="text-gray-600">Preparing members for successful tech careers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coordinators */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">👨‍💼 Meet Our Amazing Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coordinators.map((coord, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${coord.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 text-white text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white opacity-10 rounded-2xl"></div>
                  <img src={coord.image} alt={coord.name} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white shadow-lg relative z-10" />
                  <h3 className="text-2xl font-bold mb-2 relative z-10">{coord.name}</h3>
                  <p className="text-white/90 font-medium relative z-10">{coord.role}</p>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;