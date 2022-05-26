import React from 'react';

import { store } from '../../../utils/Redux/store';
import { saver as userSaver } from '../../../utils/Storage/userorage';
import { saver as scopeSaver } from '../../../utils/Storage/scoporage';
import { debounce } from 'lodash';

const Storatcher: React.FC = (
  {
    children
  }
) => {
  store.subscribe(
    debounce(() => {
      userSaver(store.getState());
      scopeSaver(store.getState());
    }, 200)
  );

  return <>{ children }</>;
};

export default Storatcher;
