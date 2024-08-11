import React from 'react';
import { logout } from '../../services/authService';

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
