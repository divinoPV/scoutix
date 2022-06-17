import axios from '../Axios/axios';

import { role, type } from '../Types/authorizationype';
import { authorizationCategorype } from '../Types/authorization_categorype';
import { authorizationRolype } from '../Types/authorization_rolype';

export const baseUrl = '/authorizations';

export const baseUrlRoles = `${ baseUrl }/roles`;

export const baseUrlCategories = `${ baseUrl }/categories`;

export const add = (
  type: type,
  authorization: authorizationCategorype | authorizationRolype,
) =>
  axios.post(
    `${ role === type ? baseUrlRoles : baseUrlCategories }/add`,
    authorization,
    {
      headers: { 'Content-Type': 'application/ld+json' }
    }
  )
;

export const all = (type: type) => axios.get(
  role === type ? baseUrlRoles : baseUrlCategories
);

export const update = (
  type: type,
  id: number,
  authorization: authorizationCategorype | authorizationRolype,
) =>
  axios.patch(
    `${ role === type ? baseUrlRoles : baseUrlCategories }/${ id }`,
    authorization,
    {
      headers: { 'Content-Type': 'application/merge-patch+json' },
    }
  )
;

export const anonymize = (
  type: type,
  activityId: number,
  featureId: number,
) =>
  axios.patch(
    `${ role === type ? baseUrlRoles : baseUrlCategories }/anonymize`,
    {
      activity: activityId,
      feature: featureId,
    },
    {
      headers: { 'Content-Type': 'application/merge-patch+json' },
    }
  )
;
