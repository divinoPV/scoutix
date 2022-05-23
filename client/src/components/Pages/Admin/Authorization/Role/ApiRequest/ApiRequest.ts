import baseAxios from '../../../../../../utils/Axios/axios';

export const getActivities = () => baseAxios.get('/activities');
export const getFeatures = () => baseAxios.get('/features');
export const getAuthorizationsRole = () => baseAxios.get('/authorization_activity_features');
export const addAuthorizationRole = (newAuth: object) => (
  baseAxios.post('/authorization_activity_features', newAuth, {
    headers: { 'Content-Type': 'application/ld+json' }
  })
);
export const updateAuthorizationRole = (id: string, updateAuth: object) => (
  baseAxios.patch(`/${id}`, updateAuth, {
    headers: { 'Content-Type': 'application/merge-patch+json' }
  })
);

export const deleteAuthorizationRole = (id: string) => baseAxios.delete(`/${id}`);


