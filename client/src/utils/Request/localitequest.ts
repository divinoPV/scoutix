import axios from '../Axios/axios';

export const baseUrl = '/localities';

export const all = () => axios.get(baseUrl);
