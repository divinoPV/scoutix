import baseAxios from '../../../../../../utils/Axios/axios';

export const getScopes = () => baseAxios.get('/scopes/available');
export const updateScope = (id: number, updatedScope: object) =>
  baseAxios.patch(`/scopes/${id}`,
    updatedScope,
    {
      headers: { 'Content-Type': 'application/merge-patch+json' }
    });
export const addScope = (newScope: object) =>
  baseAxios.post('/scopes',
    newScope,
    {
      headers: { 'Content-Type': 'application/ld+json' }
    });
