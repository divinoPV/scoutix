import axios from 'axios';

const baseAxios = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:80`,
  headers: {
    Accept: 'application/ld+json',
  },
});

baseAxios.interceptors.request.use((req) => {
  undefined !== req.headers
  && localStorage.getItem('token')
  && (req.headers.Authorization = `Bearer ${ localStorage.getItem('token') }`)
  ;

  return req;
});

export default baseAxios;
