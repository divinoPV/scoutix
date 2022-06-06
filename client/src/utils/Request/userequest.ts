import axios from '../Axios/axios';

export const baseUrl = '/users';

export const add = (user: object) =>
  axios.post(
    baseUrl,
    user,
    {
      headers: { 'Content-Type': 'application/ld+json' },
    }
  )
;

export const all = () => axios.get(baseUrl);

export const available = () => axios.get(`${ baseUrl }/available`);

export const update = (id: number, user: object) =>
  axios.patch(
    `${ baseUrl }/${ id }`,
    user,
    {
      headers: { 'Content-Type': 'application/merge-patch+json' },
    }
  )
;
