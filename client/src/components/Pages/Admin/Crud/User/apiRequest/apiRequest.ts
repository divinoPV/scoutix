import axios from '../../../../../../utils/Axios/axios';

export const get = () => axios.get('/users/available');

export const update = (id: number, updatedUser: object) =>
  axios.patch(`/users/${ id }`,
    updatedUser,
    {
      headers: { 'Content-Type': 'application/merge-patch+json' },
    }
  )
;

export const add = (newUser: object) =>
  axios.post(
    '/users',
    newUser,
    {
      headers: { 'Content-Type': 'application/ld+json' },
    }
  )
;
