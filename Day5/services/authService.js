import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth';

export const register = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = async (credentials) => {
  return axios.post(`${API_URL}/authenticate`, credentials);
};


export const logout = async () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    await axios.delete(`${API_URL}/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem('token');
    alert('Logout successful');
    window.location.href = '/login'; // example redirection
  } catch (error) {
    alert('Logout failed: ' + error.response.data.message);
  }
};
