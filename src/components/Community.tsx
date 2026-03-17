import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Trophy, Star, ArrowUpRight, Bell, Crown, Mail, Hash } from 'lucide-react';
import { API_URL } from '../config';

interface User {
  _id: string;
  name: string;
  email: string;
  points: number;
}

const Community = () => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const [announcements] = useState([
    { title: 'New Coding Contest: CodeRush', content: 'Join our monthly coding contest on April 15th! Exciting prizes to be won.', tag: 'Contest', date: 'Apr 10', icon: <Trophy size={18} />, color: 'bg-amber-100 text-amber-700' },
    { title: 'DSA Workshop Reminder', content: 'Advanced Graph Algorithms Workshop tomorrow at 10 AM in CS Room 101.', tag: 'Event', date: 'Apr 12', icon: <Bell size={18} />, color: 'bg-green-100 text-green-700' },
    { title: 'Platform Update v2.0', content: 'We just launched the new dark mode aesthetics for the Campus Club portal!', tag: 'System', date: 'Apr 15', icon: <Hash size={18} />, color: 'bg-blue-100 text-blue-700' },
  ]);

  useEffect(() => {
    fetch(`${API_URL}/leaderboard`)
      .then(res => res.json())
      .then((data: User[]) => setLeaderboard(data))
      .catch(err => {
        console.error("Failed to fetch leaderboard:", err);
        // Fallback for UI demonstration
        setLeaderboard([
          { _id: '1', name: 'Alex Rivera', email: 'alex@rit.edu', points: 2500 },
          { _id: '2', name: 'Sarah Chen', email: 'sarah@rit.edu', points: 2100 },
          { _id: '3', name: 'Marcus Bloom', email: 'marcus@rit.edu', points: 1950 },
        ]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-48 pb-24 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100/50 border border-green-200 text-green-700 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
            <span>Active Network</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Community</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            See top performers, stay updated with announcements, and engage with the sharpest minds on campus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Announcements Section */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center tracking-tight">
              <span className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mr-5 shadow-inner">
                <Megaphone size={24} />
              </span>
              Bulletins
            </h2>
            <div className="space-y-6">
              {announcements.map((ann, index) => (
                <motion.div 
                  key={index} 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group cursor-default"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center space-x-2 ${ann.color}`}>
                      {ann.icon}
                      <span>{ann.tag}</span>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">{ann.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-green-600 transition-colors uppercase tracking-tight">{ann.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">{ann.content}</p>
                  <div className="flex items-center text-xs font-black text-blue-600 uppercase tracking-widest hover:text-blue-700 cursor-pointer transition-colors group/link">
                    Read More <ArrowUpRight size={14} className="ml-2 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center tracking-tight">
              <span className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mr-5 shadow-inner border border-green-200">
                <Crown size={24} />
              </span>
              Top Performers
            </h2>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50"
            >
              {/* Header */}
              <div className="bg-slate-900 p-10 flex flex-col sm:flex-row items-center justify-between text-white gap-6">
                <div>
                  <h3 className="text-3xl font-black tracking-tight mb-2 uppercase">Global Board</h3>
                  <p className="text-slate-400 font-medium text-sm">Synchronizing geek excellence across all domains.</p>
                </div>
                <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span>Season 04</span>
                </div>
              </div>

              {/* Table Body */}
              <div className="max-h-[600px] overflow-y-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 sticky top-0 border-b border-slate-200 z-10">
                    <tr>
                      <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] w-24 text-center">Rank</th>
                      <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Geek Entity</th>
                      <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Bits earned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leaderboard.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-10 py-20 text-center text-slate-400 font-black uppercase tracking-widest text-xs">Waiting for participants...</td>
                      </tr>
                    ) : (
                      leaderboard.map((user, index) => {
                        return (
                          <motion.tr 
                            key={user._id} 
                            whileHover={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}
                            className="transition-colors group"
                          >
                            <td className="px-10 py-8">
                              <div className={`w-10 h-10 mx-auto rounded-2xl flex items-center justify-center font-black text-sm
                                ${index === 0 ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/20 rotate-3' : 
                                  index === 1 ? 'bg-slate-200 text-slate-700 shadow-lg shadow-slate-200/20 -rotate-3' : 
                                  index === 2 ? 'bg-orange-100 text-orange-800 shadow-lg shadow-orange-100/20' : 
                                  'bg-slate-50 text-slate-400'}`}>
                                {index === 0 ? <Crown size={18} /> : index + 1}
                              </div>
                            </td>
                            <td className="px-10 py-8">
                              <div className="flex items-center">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex flex-shrink-0 items-center justify-center text-slate-400 font-black mr-6 border border-slate-200 group-hover:scale-110 transition-transform">
                                  {user.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="space-y-1">
                                  <div className="font-black text-slate-900 group-hover:text-green-600 transition-colors uppercase tracking-tight text-lg">{user.name}</div>
                                  <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    <Mail size={12} className="mr-2" />
                                    {user.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-10 py-8 text-right">
                              <div className="inline-flex flex-col items-end">
                                <div className="flex items-center space-x-2 text-slate-900 font-black text-xl tracking-tighter">
                                  <Star size={16} className="text-green-500 fill-green-500" />
                                  <span>{user.points.toLocaleString()}</span>
                                </div>
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">GeekBits</span>
                              </div>
                            </td>
                          </motion.tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Community;