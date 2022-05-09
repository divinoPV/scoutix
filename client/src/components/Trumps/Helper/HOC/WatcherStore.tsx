import React from 'react';

import { store } from '../../../../utils/Redux/store';
import { saveUserState } from '../../../../utils/BrowserStorage/BrowserStorage';
import { debounce } from 'lodash';

const WatchStore: React.FC = ({ children }) => {
  store.subscribe(
    debounce(() => {
      saveUserState(store.getState());
    }, 800)
  );

  return <>{ children }</>;
};

export default WatchStore;
