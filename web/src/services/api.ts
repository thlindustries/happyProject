import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_DEV_URL,
});

export default api;
