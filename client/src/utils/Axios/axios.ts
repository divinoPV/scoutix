import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'http://scoutix.co:80',
  headers: {
    Accept: 'application/ld+json',
  },
});

export default baseAxios;
