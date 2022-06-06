import axios from '../Axios/axios';

export const baseUrl = '/event_categories';

export const add = (eventCategory: object) =>
  axios.post(
    baseUrl,
    eventCategory,
    {
      headers: { 'Content-Type': 'application/ld+json' }
    }
  )
;

export const all = () => axios.get(baseUrl);

export const available = () => axios.get(`${ baseUrl }/available`);

export const update = (id: number, eventCategory: object) =>
  axios.patch(
    `${ baseUrl }/${ id }`,
    eventCategory,
    {
      headers: { 'Content-Type': 'application/merge-patch+json' },
    }
  )
;
