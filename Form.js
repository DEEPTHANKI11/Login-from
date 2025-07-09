// src/Form.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (name === 'admin' && password === '1234') {
      localStorage.setItem('user', name);
      navigate('/profile');
    } else {
      alert('Invalid name or password');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;

