import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, Code, Layers, Share2, Brain, Zap, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

const Resources = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setIsLoggedIn(true);
  }, []);

  const roadmap = [
    { topic: 'Arrays & Strings', progress: 80, items: '150 Qs', icon: <Code className="w-6 h-6" /> },
    { topic: 'Linked Lists', progress: 60, items: '45 Qs', icon: <Layers className="w-6 h-6" /> },
    { topic: 'Stacks & Queues', progress: 70, items: '35 Qs', icon: <Share2 className="w-6 h-6" /> },
    { topic: 'Trees & Graphs', progress: 50, items: '120 Qs', icon: <Zap className="w-6 h-6" /> },
    { topic: 'Dynamic Programming', progress: 40, items: '180 Qs', icon: <Brain className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-48 pb-24 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100/50 border border-green-200 text-green-700 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Resources</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Structured roadmaps, practice problems, and comprehensive guides designed by industry experts to help you land your dream tech job.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* DSA Roadmap Section */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl shadow-slate-200/50 min-h-[400px] flex flex-col"
            >
              {isLoggedIn ? (
                <>
                  <div className="flex items-center justify-between mb-12">
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight text-slate-900">DSA Progress Tracker</h2>
                      <p className="font-medium text-slate-500 mt-2">Personalized tracking for core data structures.</p>
                    </div>
                    <div className="hidden sm:block text-right">
                      <div className="text-4xl font-black text-green-600">60%</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Average</div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {roadmap.map((item, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex items-center gap-6 bg-slate-50 p-6 rounded-[2rem] hover:bg-green-50/50 transition-all border border-transparent hover:border-green-100"
                      >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-3 items-end">
                            <span className="font-black text-slate-800 text-lg tracking-tight">{item.topic}</span>
                            <span className="text-[10px] font-black px-3 py-1 bg-white text-slate-500 rounded-lg border border-slate-200 uppercase tracking-widest">{item.items}</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner p-0.5">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                              className="bg-gradient-to-r from-green-600 to-emerald-400 h-2 rounded-full relative" 
                            >
                              <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite]"></div>
                            </motion.div>
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center space-x-2 w-16 justify-end">
                          <span className="font-black text-slate-400 group-hover:text-green-600 transition-colors text-slate-400 group-hover:text-green-600 transition-colors">
                            {item.progress}%
                          </span>
                          {item.progress > 75 && <CheckCircle2 size={16} className="text-green-500" />}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-slate-50/50 rounded-[2.5rem] border border-dashed border-slate-200 shadow-inner">
                  <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center text-slate-300 mb-8 shadow-sm border border-slate-100">
                    <Lock size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Progress Locked</h3>
                  <p className="text-slate-500 font-medium mb-10 max-w-xs mx-auto">
                    Sign in to your account to track your problem-solving journey and visualize your DSA mastery.
                  </p>
                  <Link 
                    to="/login" 
                    className="flex items-center space-x-3 px-8 py-4 bg-green-600 text-white font-black rounded-2xl shadow-xl shadow-green-900/20 hover:bg-green-700 transition-all active:scale-95 text-[10px] uppercase tracking-widest"
                  >
                    <span>Authorize Portal</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>

          {/* Practice Links Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Top Platforms</h2>
            
            <motion.a 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              href="https://practice.geeksforgeeks.org" 
              target="_blank" 
              rel="noreferrer" 
              className="block group"
            >
              <div className="bg-green-700 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
                <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 border-b-4 border-green-900 shadow-[inset_0_-4px_6px_rgba(0,0,0,0.1),0_15px_30px_-5px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform overflow-hidden">
                  <img src="/logo.png" className="w-full h-full object-contain scale-110" alt="GFG" />
                </div>
                <h3 className="text-3xl font-black mb-3 tracking-tight text-white">GFG Practice</h3>
                <p className="text-green-100 font-medium text-sm mb-8 leading-relaxed">Company-wise tags, POTD & masterclass articles.</p>
                <div className="inline-flex items-center text-[10px] font-black bg-white text-green-700 px-6 py-3 rounded-xl shadow-xl transition-all uppercase tracking-widest group-hover:bg-green-50">
                  Start Solving <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </motion.a>

            <motion.a 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              href="https://leetcode.com" 
              target="_blank" 
              rel="noreferrer" 
              className="block group"
            >
              <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl border border-slate-800 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
                <div className="relative z-10 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-xl text-yellow-500">
                  <Book size={28} />
                </div>
                <h3 className="text-3xl font-black mb-3 tracking-tight text-white">LeetCode</h3>
                <p className="text-slate-400 font-medium text-sm mb-8 leading-relaxed">Patterns, contests & global developer rankings.</p>
                <div className="inline-flex items-center text-[10px] font-black bg-slate-800 px-6 py-3 rounded-xl border border-slate-700 shadow-xl transition-all uppercase tracking-widest group-hover:bg-yellow-500 group-hover:text-slate-900 group-hover:border-yellow-500">
                  Start Solving <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;