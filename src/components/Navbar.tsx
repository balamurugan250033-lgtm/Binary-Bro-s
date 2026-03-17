import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm' 
          : 'bg-green-700 py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group outline-none">
          <div className="relative">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 overflow-hidden border-2 ${
              isScrolled 
                ? 'bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.05)] border-slate-100' 
                : 'bg-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3),inset_0_-4px_6px_rgba(0,0,0,0.2),inset_0_4px_6px_rgba(255,255,255,0.9)] border-green-800/30'
            }`}>
              <img src="/logo.png" alt="GFG" className="w-full h-full object-contain scale-105" />
            </div>
            <div className="absolute -inset-2 bg-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-lg leading-tight tracking-tight transition-colors duration-500 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              GFG CLUB
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
              isScrolled ? 'text-green-600' : 'text-green-100/80'
            }`}>
              RIT Chapter
            </span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50">
          <ul className="flex space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name} className="relative">
                  <Link 
                    to={link.path} 
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 z-10 flex items-center ${
                      isActive 
                        ? (isScrolled ? 'text-white' : 'text-green-700') 
                        : (isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-green-50 hover:text-white')
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-xl z-[-1] shadow-md ${
                          isScrolled ? 'bg-green-600' : 'bg-white'
                        }`}
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* User Profile / CTA */}
        <div className="hidden md:flex items-center space-x-3">
          {user ? (
            <div className="flex items-center space-x-2">
              <div className={`flex items-center space-x-3 px-4 py-2 rounded-2xl border transition-all duration-500 ${
                isScrolled ? 'bg-slate-50 border-slate-200' : 'bg-white/10 border-white/20'
              }`}>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-inner border border-white/20">
                  {user.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className={`font-bold text-sm leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                    {user.name}
                  </span>
                  <span className={`text-[10px] ${isScrolled ? 'text-slate-500' : 'text-green-100/70'}`}>
                    Member
                  </span>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className={`p-2.5 rounded-xl border transition-all hover:scale-105 active:scale-95 ${
                  isScrolled ? 'text-slate-500 hover:text-red-500 border-slate-200 hover:bg-red-50 hover:border-red-100' : 'text-white/70 hover:text-white border-white/10 hover:bg-white/10'
                }`}
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl active:scale-95 ${
                isScrolled 
                  ? 'bg-green-600 text-white shadow-green-200 hover:bg-green-700' 
                  : 'bg-white text-green-700 shadow-green-900/20 hover:bg-green-50'
              }`}
            >
              SIGN IN
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-2xl text-lg font-bold ${
                    location.pathname === link.path ? 'bg-green-50 text-green-700' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100 mx-4" />
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 px-4 py-2">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{user.name}</p>
                      <p className="text-slate-500 text-sm">Member</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full py-4 rounded-2xl bg-red-50 text-red-600 font-bold flex items-center justify-center space-x-2"
                  >
                    <LogOut size={20} />
                    <span>Logout Session</span>
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-5 rounded-2xl bg-green-600 text-white text-center font-black"
                >
                  SIGN IN TO PORTAL
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;