import axios from '../Axios/axios';

export const baseUrl = '/scopes';

export const add = (scope: object) =>
  axios.post(
    baseUrl,
    scope,
    {
      headers: { 'Content-Type': 'application/ld+json' }
    }
  )
;

export const all = () => axios.get(baseUrl);

export const available = () => axios.get(`${ baseUrl }/available`);

export const update = (id: number, scope: object) =>
  axios.patch(
    `${ baseUrl }/${ id }`,
    scope,
    {
      headers: { 'Content-Type': 'application/merge-patch+json' },
    }
  )
;
