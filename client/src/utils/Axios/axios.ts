import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'http://scoutix.co:80',
  headers: {
    Accept: 'application/ld+json',
  },
});

baseAxios.interceptors.request.use((req) => {
  if(localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return req;
});

export default baseAxios;
