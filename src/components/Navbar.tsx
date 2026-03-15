import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl sticky top-0 z-50 border-b-4 border-green-500">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-2xl font-bold hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-lg shadow-lg">
            G
          </div>
          <span className="text-white">GFG Campus Club</span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="hover:text-green-200 transition-colors duration-200 font-medium relative group">Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></span>
          </Link></li>
          <li><Link to="/about" className="hover:text-green-200 transition-colors duration-200 font-medium relative group">About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></span>
          </Link></li>
          <li><Link to="/events" className="hover:text-green-200 transition-colors duration-200 font-medium relative group">Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></span>
          </Link></li>
          <li><Link to="/resources" className="hover:text-green-200 transition-colors duration-200 font-medium relative group">Resources
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></span>
          </Link></li>
          <li><Link to="/community" className="hover:text-green-200 transition-colors duration-200 font-medium relative group">Community
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></span>
          </Link></li>
          <li><Link to="/contact" className="hover:text-green-200 transition-colors duration-200 font-medium relative group">Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 group-hover:w-full transition-all duration-300"></span>
          </Link></li>
          <li><Link to="/login" className="bg-white text-green-700 px-6 py-2 rounded-full font-semibold hover:bg-green-50 hover:scale-105 transition-all duration-200 shadow-lg border-2 border-green-600">Login</Link></li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none hover:bg-green-500 p-2 rounded-lg transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;