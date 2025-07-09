// src/Profile.js
import { useNavigate } from 'react-router-dom';
import './index.css';

function Profile() {
  const navigate = useNavigate();
  const name = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>Welcome, {name}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
