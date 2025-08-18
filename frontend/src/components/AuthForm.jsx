import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function AuthForm() {
  const { user, login, logout } = useContext(AuthContext);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const res = await axios.post(`http://localhost:5000${url}`, form);
      login(res.data);
    } catch (err) {
      alert(err.response?.data?.error || 'Error');
    }
  };

  if (user) {
    return (
      <div className="p-4 border rounded">
        <p>Welcome, {user.name}!</p>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded space-y-2">
      {!isLogin && <input className="border p-2 w-full" name="name" placeholder="Name" onChange={handleChange} />}
      <input className="border p-2 w-full" name="email" placeholder="Email" onChange={handleChange} />
      <input className="border p-2 w-full" type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">{isLogin ? 'Login' : 'Sign Up'}</button>
      <p className="text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span className="text-blue-600 cursor-pointer ml-1" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </form>
  );
}

export default AuthForm;
