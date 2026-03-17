import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, ArrowRight, Star, Users, Clock, Trophy, BookOpen, Terminal, Cpu, Layout, Lightbulb, GraduationCap } from 'lucide-react';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - now.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: 'Data Structures', icon: <BookOpen className="w-7 h-7" />, color: 'bg-emerald-100 text-emerald-700', border: 'hover:border-emerald-300' },
    { name: 'Algorithms', icon: <Terminal className="w-7 h-7" />, color: 'bg-blue-100 text-blue-700', border: 'hover:border-blue-300' },
    { name: 'Web Development', icon: <Layout className="w-7 h-7" />, color: 'bg-purple-100 text-purple-700', border: 'hover:border-purple-300' },
    { name: 'Machine Learning', icon: <Cpu className="w-7 h-7" />, color: 'bg-orange-100 text-orange-700', border: 'hover:border-orange-300' },
    { name: 'System Design', icon: <Lightbulb className="w-7 h-7" />, color: 'bg-rose-100 text-rose-700', border: 'hover:border-rose-300' },
    { name: 'Interview Prep', icon: <GraduationCap className="w-7 h-7" />, color: 'bg-amber-100 text-amber-700', border: 'hover:border-amber-300' },
  ];

  const popularCourses = [
    { title: 'Complete DSA in C++/Java', level: 'Beginner to Advance', rating: '4.9', students: '120k+', tag: 'Bestseller' },
    { title: 'Full Stack Web Development', level: 'MERN Stack', rating: '4.8', students: '85k+', tag: 'Trending' },
    { title: 'GATE CS & IT 2025', level: 'Comprehensive Prep', rating: '4.7', students: '45k+', tag: 'New' },
    { title: 'System Design (LLD & HLD)', level: 'Advanced', rating: '4.9', students: '60k+', tag: 'Popular' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-green-100 selection:text-green-900">
      {/* Search Header / Hero */}
      <div className="bg-green-700 pt-48 pb-32 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl z-0"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -left-[10%] w-[35%] h-[55%] rounded-full bg-gradient-to-tr from-green-400/10 to-transparent blur-3xl z-0"
        />

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-10"
          >
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4),0_15px_30px_-10px_rgba(0,0,0,0.2),inset_0_-10px_10px_rgba(0,0,0,0.1),inset_0_10px_10px_rgba(255,255,255,1)] border-b-8 border-green-900/40 p-0 group cursor-pointer transition-all hover:rotate-6 hover:scale-105 active:scale-95 overflow-hidden">
               <motion.img 
                 whileHover={{ rotate: 12, scale: 1.1 }}
                 src="/logo.png" 
                 className="w-full h-full object-contain scale-110" 
                 alt="GFG" 
               />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"
          >
            Master Your Future <br />
            <span className="text-green-300">Through Code</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-green-50/80 text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            The premium platform for geeks to learn, practice, and land dream tech careers. 
            Join 20 million+ developers mastering the arts of computer science.
          </motion.p>
          
          {/* Main Search Bar */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto relative group"
          >
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-green-200 group-focus-within:text-green-600 transition-colors" />
            </div>
            <input 
              type="text" 
              className="w-full pl-16 pr-36 py-6 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-4 focus:ring-green-400/30 text-xl text-slate-800 transition-all placeholder:text-slate-400"
              placeholder="Search tutorials, courses, problems..."
            />
            <div className="absolute inset-y-3 right-3 flex items-center">
              <button className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-black rounded-3xl transition-all shadow-xl shadow-green-900/40 active:scale-95">
                Search
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-bold"
          >
            <span className="text-green-100 uppercase tracking-widest text-xs pt-2">Trending:</span>
            {['TCS NQT', 'Amazon Prep', 'MERN Stack', 'SDE Sheet', 'React 19'].map(tag => (
              <span key={tag} className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-2xl cursor-pointer transition-all border border-white/5 backdrop-blur-sm active:scale-95">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        
        {/* Explore Categories */}
        <div className="mb-28">
          <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Explore Skills</h2>
              <p className="text-slate-500 font-medium">Curated learning paths for every tech domain</p>
            </div>
            <Link to="/resources" className="text-green-700 font-bold hover:text-green-800 flex items-center group">
              View All Resources <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-6 gap-6"
          >
            {categories.map((cat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                className={`bg-white rounded-[2rem] p-8 text-center border border-slate-200 transition-all cursor-pointer group ${cat.border}`}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${cat.color} shadow-inner`}>
                  {cat.icon}
                </div>
                <h3 className="font-black text-slate-800 text-sm md:text-base group-hover:text-green-600 transition-colors leading-tight">
                  {cat.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-28">
          
          {/* Section: Coding Practice & POTD */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Problem of the Day Banner */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl group"
            >
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] group-hover:bg-green-500/20 transition-colors duration-700"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
                    <Trophy size={14} className="animate-bounce" />
                    <span>Daily Challenge</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 leading-tight">Longest Substring Without Repeating...</h3>
                  <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-bold">
                    <span className="flex items-center"><Clock size={18} className="mr-2 text-red-400" /> {timeLeft} left</span>
                    <span className="flex items-center"><Star size={18} className="mr-2 text-yellow-400" /> +50 XP</span>
                    <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white uppercase tracking-widest">Medium</span>
                  </div>
                </div>
                <button className="whitespace-nowrap bg-green-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-green-500 transition-all shadow-xl shadow-green-900/20 active:scale-95">
                  SOLVE NOW
                </button>
              </div>
            </motion.div>

            {/* Popular Courses */}
            <div>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-black text-slate-900">Featured Learning</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {popularCourses.map((course, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-7 rounded-[2.5rem] border border-slate-200 hover:border-green-400 hover:shadow-2xl transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-black px-4 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100 uppercase tracking-widest">{course.tag}</span>
                        <div className="flex items-center text-sm font-bold text-slate-700">
                          <Star size={16} className="text-yellow-400 mr-1 fill-yellow-400" /> {course.rating}
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight group-hover:text-green-700 transition-colors uppercase tracking-tight">{course.title}</h3>
                      <p className="text-sm font-bold text-slate-500 mb-6">{course.level}</p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <span className="text-sm font-bold text-slate-500 flex items-center">
                        <Users size={18} className="mr-2 text-green-600" />
                        {course.students}
                      </span>
                      <span className="text-green-700 font-black text-xs uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform cursor-pointer">
                        Get Started <ArrowRight size={14} className="ml-1" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Sidebar / Quick Links / Interview Prep */}
          <div className="space-y-8">
            
            {/* Interview Preparation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-700 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-black text-white mb-6">Career Mastery</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Top 150 Interview Questions', tag: 'High Impact' },
                  { name: 'Big Tech Preparation', tag: 'MAANG' },
                  { name: 'Core CS Concept Guides', tag: 'Fundamentals' },
                  { name: 'System Design Mastery', tag: 'Senior Role' }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center group cursor-pointer p-4 hover:bg-white/10 rounded-2xl transition-all border border-transparent hover:border-white/10"
                  >
                    <span className="text-green-50 font-bold text-sm tracking-tight group-hover:text-white transition-colors">{item.name}</span>
                    <span className="text-[9px] font-black px-3 py-1 bg-white/10 text-green-100 rounded-lg border border-white/20 uppercase tracking-widest">{item.tag}</span>
                  </motion.li>
                ))}
              </ul>
              <button className="w-full mt-6 py-5 bg-white text-emerald-900 font-black rounded-2xl hover:bg-emerald-50 transition-all active:scale-95 text-xs shadow-xl uppercase tracking-widest">
                Explore All Guides
              </button>
            </motion.div>

            {/* Structured Sheets Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[3rem] p-8 border border-slate-200 shadow-xl"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner mb-6">📑</div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Curated DSA Sheets</h3>
              <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">Master Data Structures in 45 days with our heavily researched problem sets.</p>
              <div className="space-y-3">
                <button className="w-full bg-slate-50 text-slate-800 font-black py-4 rounded-xl border border-slate-200 hover:border-green-400 hover:bg-green-50 transition-all text-[10px] uppercase tracking-widest active:scale-95">
                  SDE Core Sheet (150 Qs)
                </button>
                <button className="w-full bg-slate-50 text-slate-800 font-black py-4 rounded-xl border border-slate-200 hover:border-green-400 hover:bg-green-50 transition-all text-[10px] uppercase tracking-widest active:scale-95">
                  FAANG Pattern Sheet
                </button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Global Impact Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3.5rem] p-12 border border-slate-200 flex flex-col md:flex-row items-center justify-around gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 shadow-xl shadow-slate-200/50"
        >
           <div className="px-8 w-full">
             <div className="text-5xl font-black text-green-600 mb-2">20M+</div>
             <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Global Learners</div>
           </div>
           <div className="px-8 w-full pt-8 md:pt-0">
             <div className="text-5xl font-black text-green-600 mb-2">5000+</div>
             <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Guided Resources</div>
           </div>
           <div className="px-8 w-full pt-8 md:pt-0">
             <div className="text-5xl font-black text-green-600 mb-2">10k+</div>
             <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Solved Problems</div>
           </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;