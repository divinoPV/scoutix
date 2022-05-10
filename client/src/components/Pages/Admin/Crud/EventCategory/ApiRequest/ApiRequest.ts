import baseAxios from '../../../../../../utils/Axios/axios';

export const getCategories = () => baseAxios.get('/event-categories/available');
export const updateCategory = (id: number, updatedCateg: object) =>
  baseAxios.put(`/event-categories/${id}`,
    updatedCateg,
    {
      headers: { 'Content-Type': 'application/merge-patch+json' }
    });
export const addCategory = (newCateg: object) =>
  baseAxios.post('/event_categories',
    newCateg,
    {
      headers: { 'Content-Type': 'application/ld+json' }
    });
