import _ from 'lodash';

import { loader as userLoader, saver as userSaver } from './userorage';
import { loader as scopeLoader, saver as scopeSaver } from './scoporage';

export const loaders = [userLoader, scopeLoader];

export const savers = [userSaver, scopeSaver];

export const preloader: any = () => {
  return _.reduce(loaders, (acc, loader) => ({ ...acc, ...loader() }), {});
};
