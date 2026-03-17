import { useState } from 'react';
import { API_URL } from '../config';

const Login = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isRegister ? 'register' : 'login';
    try {
      const response = await fetch(`${API_URL}/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (response.ok) {
        if (!isRegister) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          alert('Login Successful!');
          window.location.href = '/'; 
        } else {
          alert('Registration Successful! Please sign in with your new account.');
          setFormData({ name: '', email: '', password: '' });
          setIsRegister(false);
        }
      } else {
        alert(data.error || data.message || 'An error occurred during ' + endpoint);
      }
    } catch (error) {
       alert('Network error - Is your backend server running?');
       console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-200 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-green-200 blur-[150px] rounded-full"></div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden border border-slate-200 relative z-10 transition-all duration-500">
        
        {/* Modern Tabs */}
        <div className="flex bg-slate-50 p-2 m-4 rounded-2xl border border-slate-200">
          <button 
            type="button"
            onClick={() => setIsRegister(false)}
            className={`flex-1 py-3 text-center font-bold text-sm rounded-xl transition-all duration-300 ${!isRegister ? 'bg-white text-slate-900 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Sign In
          </button>
          <button 
            type="button"
            onClick={() => setIsRegister(true)}
            className={`flex-1 py-3 text-center font-bold text-sm rounded-xl transition-all duration-300 ${isRegister ? 'bg-white text-slate-900 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Create Account
          </button>
        </div>

        <div className="p-10 pt-6">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white/20 p-2">
               <img src="/logo.png" className="w-16 h-16 object-contain rounded-full" alt="GFG" />
            </div>

          <h2 className="text-3xl font-black text-slate-900 text-center mb-2">
            {isRegister ? 'Join the Club' : 'Welcome Back'}
          </h2>
          <p className="text-center text-slate-500 text-sm mb-10 font-medium">
            {isRegister ? 'Start your journey with the GFG Campus family.' : 'Continue your learning adventure.'}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegister && (
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-medium"
                  placeholder="e.g. John Doe"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email address</label>
              <input
                type="email"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-medium"
                placeholder="name@university.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                {!isRegister && <span className="text-xs font-bold text-green-600 hover:text-green-700 cursor-pointer">Forgot?</span>}
              </div>
              <input
                type="password"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-medium"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-slate-900 text-white font-bold py-5 px-4 rounded-2xl hover:bg-slate-800 hover:shadow-2xl shadow-slate-900/20 transition-all duration-300 transform hover:-translate-y-0.5 mt-4"
            >
              {isRegister ? 'Create My Account' : 'Sign In Now'}
            </button>

            {isRegister && (
              <p className="text-center text-[10px] text-slate-400 font-medium px-4">
                By signing up, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;