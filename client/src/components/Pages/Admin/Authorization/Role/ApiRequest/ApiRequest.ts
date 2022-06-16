import baseAxios from '../../../../../../utils/Axios/axios';

export const getAuthorizationsRole = () => baseAxios.get('/authorizations/roles');

export const addAuthorizationRole = (newAuth: object) => (
  baseAxios.post('/authorizations/roles/add', { authorizations: newAuth }, {
    headers: { 'Content-Type': 'application/json' }
  })
);

export const updateAuthorizationRole = (updateAuth: object) => (
  baseAxios.patch('authorizations/roles', updateAuth, {
    headers: { 'Content-Type': 'application/merge-patch+json' }
  })
);

export const deleteAuthorizationRole = (featureId: number, activityId: number) => (
  baseAxios.get(`/authorizations/roles/${featureId}/${activityId}`, {
    headers: { 'Content-Type': 'application/ld+json' }
  })
);



