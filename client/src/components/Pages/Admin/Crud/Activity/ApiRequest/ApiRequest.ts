import baseAxios from '../../../../../../utils/Axios/axios';

export const getActivities = () => baseAxios.get('/activities');
