import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, HelpCircle, ExternalLink, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const faqs = [
    { question: 'How do I join the GFG Campus club RIT?', answer: 'Simply sign up on our portal and keep an eye on the "Events" page. You can participate in any of our open hackathons or workshops to get started!' },
    { question: 'Are there any prerequisites for joining?', answer: 'No specific prerequisites! Whether you are a beginner or an expert, we have resources and events tailored for all skill levels.' },
    { question: 'How can I contribute to the club?', answer: 'You can contribute by volunteering for events, mentoring juniors, or contributing to our open-source projects in the Innovation Hub.' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-48 pb-24 font-sans text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100/50 border border-green-200 text-green-700 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]">
            <span>Support Center</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Touch</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Have questions? We're here to help. Reach out to the core team or check our frequently asked questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
              <h2 className="text-3xl font-black mb-10 tracking-tight">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-xs font-black text-slate-400 mb-2 ml-1 uppercase tracking-widest group-focus-within:text-green-600 transition-colors">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors" size={20} />
                      <input
                        type="text"
                        className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-bold text-slate-700 placeholder:text-slate-300"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-black text-slate-400 mb-2 ml-1 uppercase tracking-widest group-focus-within:text-green-600 transition-colors">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors" size={20} />
                      <input
                        type="email"
                        className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-bold text-slate-700 placeholder:text-slate-300"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-xs font-black text-slate-400 mb-2 ml-1 uppercase tracking-widest group-focus-within:text-green-600 transition-colors">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-5 top-6 text-slate-400 group-focus-within:text-green-600 transition-colors" size={20} />
                    <textarea
                      className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-bold text-slate-700 placeholder:text-slate-300 min-h-[180px]"
                      placeholder="How can we help you?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full md:w-auto px-12 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 text-xs uppercase tracking-widest"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar: FAQs & Links */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-black mb-8 flex items-center tracking-tight">
                <span className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mr-4 shadow-inner">
                  <HelpCircle size={22} />
                </span>
                Quick Answers
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ x: 5 }}
                    className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-default"
                  >
                    <h3 className="font-black text-slate-800 mb-3 group-hover:text-green-600 transition-colors">{faq.question}</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-green-700 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <h2 className="text-2xl font-black mb-6 tracking-tight">Official Channels</h2>
               <p className="text-green-50/80 font-medium text-sm mb-10 leading-relaxed">Connect with our global platform for more resources and career opportunities.</p>
               <div className="space-y-4">
                 <motion.a 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   href="https://www.geeksforgeeks.org" 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center justify-between p-5 bg-white/10 rounded-2xl hover:bg-white text-white hover:text-green-700 transition-all border border-white/10 font-black text-xs uppercase tracking-widest group"
                 >
                   <div className="flex items-center space-x-3">
                     <Globe size={18} className="group-hover:animate-spin" />
                     <span>GFG Portal</span>
                   </div>
                   <ExternalLink size={18} />
                 </motion.a>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;