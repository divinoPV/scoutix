import axios from '../Axios/axios';

export const baseUrl = '/events';

export const all = () => axios.get(baseUrl);

export const available = () => axios.get(`${ baseUrl }/available`);
