import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, GraduationCap, Linkedin, Twitter, Github, Award, Briefcase, Zap, Heart } from 'lucide-react';

const About = () => {
  const coordinators = [
    { name: 'John Doe', role: 'Club President', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', color: 'from-emerald-400 to-green-600' },
    { name: 'Jane Smith', role: 'Technical Lead', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane', color: 'from-green-400 to-teal-600' },
    { name: 'Bob Johnson', role: 'Innovation Head', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob', color: 'from-teal-400 to-emerald-600' },
  ];

  const stats = [
    { number: '500+', label: 'Active Members', icon: <Users size={24} /> },
    { number: '50+', label: 'Events Hosted', icon: <Award size={24} /> },
    { number: '100+', label: 'Projects Built', icon: <Briefcase size={24} /> },
    { number: '25+', label: 'Workshops', icon: <GraduationCap size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans overflow-hidden">
      {/* Premium Hero Section */}
      <div className="bg-slate-900 pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-500 blur-[150px] rounded-full mix-blend-screen"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600 blur-[150px] rounded-full mix-blend-screen"
          ></motion.div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 text-green-400 text-[10px] font-black rounded-full mb-8 uppercase tracking-[0.2em] backdrop-blur-md"
          >
            <Heart size={14} className="fill-green-400" />
            <span>Passion for Perfection</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Legacy</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Empowering student developers through elite collaboration, radical innovation, and direct guidance from the global GeeksforGeeks ecosystem.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-32 px-6 max-w-6xl">
        {/* Mission Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 text-[10px] font-black rounded-full mb-8 uppercase tracking-[0.2em] shadow-sm">
              <span>RIT CHAPTER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">Bridging Academics <br />and Industry</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
              GeeksforGeeks Campus club RIT is a vibrant community of elite coders, fostering innovation and excellence. We bridge the critical gap between academic theory and high-stakes software engineering.
            </p>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              We're a tech-family that thrives on solving impossible problems and building the next generation of digital infrastructure.
            </p>
          </motion.div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 text-center transition-all group"
              >
                <div className="w-12 h-12 bg-slate-50 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-all shadow-inner">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.number}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Objectives Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden mb-40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-24 tracking-tight">Strategic Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {[
                { title: 'Skill Engineering', desc: 'Surgical focus on Data Structures, Algorithms, and Core Computer Science fundamentals.', icon: <Target />, color: 'bg-emerald-500 shadow-emerald-500/20' },
                { title: 'Peer Collective', desc: 'A 24/7 technical support network providing real-world career orchestration.', icon: <Users />, color: 'bg-green-500 shadow-green-500/20' },
                { title: 'Innovation Engine', desc: 'Directly funding and mentoring student-led products and open-source contributions.', icon: <Lightbulb />, color: 'bg-teal-500 shadow-teal-500/20' },
                { title: 'Global Dominance', desc: 'Excelling in high-tier hackathons and international coding competitions.', icon: <Zap />, color: 'bg-amber-500 shadow-amber-500/20' }
              ].map((obj, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className={`w-16 h-16 rounded-2xl ${obj.color} flex-shrink-0 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {obj.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">{obj.title}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed text-lg">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional Team Section */}
        <div>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">The Core Team</h2>
            <p className="text-xl text-slate-500 mt-6 font-medium">The visionaries orchestrating RIT's technological renaissance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {coordinators.map((coord, index) => (
              <motion.div 
                key={index} 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-[3.5rem] p-10 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] z-0 transition-all group-hover:bg-green-50"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-[2.5rem] p-1.5 bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl group-hover:rotate-6 transition-transform duration-500">
                    <img src={coord.image} alt={coord.name} className="w-full h-full rounded-[2.2rem] border-4 border-white object-cover" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight uppercase leading-none">{coord.name}</h3>
                  <div className="text-green-600 font-black text-[10px] uppercase tracking-[0.2em] mb-8">{coord.role}</div>
                  <div className="flex justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.1, y: -2 }} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-sm border border-slate-100"><Linkedin size={20} /></motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -2 }} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all cursor-pointer shadow-sm border border-slate-100"><Twitter size={20} /></motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -2 }} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all cursor-pointer shadow-sm border border-slate-100"><Github size={20} /></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;