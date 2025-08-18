// import { useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// function AuthForm() {
//   const { user, login, logout } = useContext(AuthContext);
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [isLogin, setIsLogin] = useState(true);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = isLogin ? '/api/auth/login' : '/api/auth/signup';
//       const res = await axios.post(`http://localhost:5000${url}`, form);
//       login(res.data);
//     } catch (err) {
//       alert(err.response?.data?.error || 'Error');
//     }
//   };

//   if (user) {
//     return (
//       <div className="p-4 border rounded">
//         <p>Welcome, {user.name}!</p>
//         <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border rounded space-y-2">
//       {!isLogin && <input className="border p-2 w-full" name="name" placeholder="Name" onChange={handleChange} />}
//       <input className="border p-2 w-full" name="email" placeholder="Email" onChange={handleChange} />
//       <input className="border p-2 w-full" type="password" name="password" placeholder="Password" onChange={handleChange} />
//       <button className="bg-blue-500 text-white px-4 py-2 rounded">{isLogin ? 'Login' : 'Sign Up'}</button>
//       <p className="text-sm">
//         {isLogin ? "Don't have an account?" : "Already have an account?"}
//         <span className="text-blue-600 cursor-pointer ml-1" onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? 'Sign Up' : 'Login'}
//         </span>
//       </p>
//     </form>
//   );
// }

// export default AuthForm;

import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

function AuthForm() {
  const { user, login, logout } = useContext(AuthContext);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const res = await axios.post(`${API}${url}`, form);
      login(res.data);
    } catch (err) {
      alert(err.response?.data?.error || 'Error');
    }
  };

  if (user) {
    return (
      <div className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6 text-center">
        <p className="text-lg font-semibold text-gray-700 mb-4">Welcome, <span className="text-indigo-600">{user.name}</span>!</p>
        <button 
          onClick={logout} 
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          {isLogin ? 'Welcome Back 👋' : 'Create an Account ✨'}
        </h2>

        {!isLogin && (
          <input 
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none" 
            name="name" 
            placeholder="Full Name" 
            onChange={handleChange} 
          />
        )}
        
        <input 
          className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none" 
          name="email" 
          type="email"
          placeholder="Email" 
          onChange={handleChange} 
        />
        
        <input 
          className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none" 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange} 
        />

        <button 
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p className="text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span 
            className="text-indigo-600 font-medium cursor-pointer ml-1 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
