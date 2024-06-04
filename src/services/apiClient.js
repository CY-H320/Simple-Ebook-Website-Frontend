import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',  // Ensure this base URL matches your FastAPI server URL
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    alert('error getting token');
    return Promise.reject(error);
  }
);

export default apiClient;
