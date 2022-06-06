import axios from '../Axios/axios';

export const baseUrl = '/activities';

export const all = () => axios.get(baseUrl);
