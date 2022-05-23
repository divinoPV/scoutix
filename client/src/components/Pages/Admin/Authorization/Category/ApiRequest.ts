import baseAxios from '../../../../../utils/Axios/axios';

export const getActivities= () => baseAxios.get('/activities');
export const getCategories= () => baseAxios.get('/event_categories/available');