import { activitype } from './activitype';
import { categorype } from './categorype';

export type authorizationCategorype = {
  activity: activitype,
  archived: string,
  category: categorype,
  deleted: string,
};
