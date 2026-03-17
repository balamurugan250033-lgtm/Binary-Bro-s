import { motion } from 'framer-motion';
import { Bot, Wrench, Github, ClipboardList, Search, Rocket, ArrowRight } from 'lucide-react';

const Innovation = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 font-sans text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-teal-200/20 rounded-full blur-[100px]"></div>
        </div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100/50 border border-green-200 text-green-700 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em] shadow-sm">
            <span>R&D Laboratory</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">
            Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Hub</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            The laboratory where bold ideas turn into reality. Explore our cutting-edge internal projects and collaboration frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* AI Chatbot Card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group transition-all"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-green-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-[1.5rem] flex items-center justify-center mb-10 text-2xl shadow-inner border border-green-200">
                <Bot size={32} />
              </div>
              <h2 className="text-4xl font-black mb-6 text-slate-900 tracking-tight">Campus AI Assistant</h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                An LLM-powered tutor trained on the GeeksforGeeks knowledge base to help you solve DSA problems and understand complex concepts 24/7.
              </p>
              
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 mb-10 shadow-inner">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                  <span className="text-xs font-black text-amber-600 uppercase tracking-[0.1em]">Status: Core Development</span>
                </div>
                <div className="space-y-4">
                  <motion.div 
                    animate={{ width: ['75%', '85%', '75%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-4 bg-slate-200 rounded-full opacity-50 shadow-inner"
                  ></motion.div>
                  <motion.div 
                    animate={{ width: ['50%', '60%', '50%'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-4 bg-slate-200 rounded-full opacity-50 shadow-inner"
                  ></motion.div>
                </div>
              </div>
              
              <button className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-black opacity-50 cursor-not-allowed text-xs uppercase tracking-widest shadow-xl">
                Join Beta Waitlist
              </button>
            </div>
          </motion.div>

          {/* Collaboration Tools Card */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-slate-900 p-10 md:p-14 rounded-[3.5rem] text-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden group transition-all"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 text-emerald-400 rounded-[1.5rem] flex items-center justify-center mb-10 text-2xl border border-white/10 shadow-2xl">
                <Wrench size={32} />
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tight">Collaboration Suite</h2>
              <p className="text-slate-400 font-medium leading-relaxed mb-12 text-lg">
                A customized stack for team synchronization, code reviews, and project tracking designed specifically for student developers.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { label: 'GitHub Sync', icon: <Github size={20} /> },
                  { label: 'Agile Kanban', icon: <ClipboardList size={20} /> },
                  { label: 'Code Review', icon: <Search size={20} /> },
                  { label: 'Auto Deploy', icon: <Rocket size={20} /> }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-slate-300 group/item cursor-default"
                  >
                    <span className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover/item:border-emerald-500/50 group-hover/item:bg-emerald-500/10 transition-all duration-300">
                      {item.icon}
                    </span>
                    <span className="font-bold text-sm">{item.label}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="inline-flex items-center text-emerald-400 font-black text-xs uppercase tracking-[0.2em] hover:text-emerald-300 cursor-pointer transition-colors group/btn">
                Launch Suite <ArrowRight size={18} className="ml-3 transform group-hover/btn:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;