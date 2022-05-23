import baseAxios from '../../../../../../utils/Axios/axios';

export const getLocalities = () => baseAxios.get('/localities');
