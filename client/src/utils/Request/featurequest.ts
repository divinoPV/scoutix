import axios from '../Axios/axios';

export const baseUrl = '/features';

export const all = () => axios.get(baseUrl);
