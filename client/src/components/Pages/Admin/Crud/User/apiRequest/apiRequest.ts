import baseAxios from '../../../../../../utils/Axios/axios';

export const getUsers = () => baseAxios.get('/users/available');
export const updateUser = (id: number, updatedUser: object) =>
  baseAxios.patch(`/users/${id}`,
    updatedUser,
    {
      headers: { 'Content-Type': 'application/merge-patch+json' }
    });
export const addUser = (newUser: object) =>
  baseAxios.post('/users',
    newUser, {
      headers: { 'Content-Type': 'application/ld+json' }
    });
