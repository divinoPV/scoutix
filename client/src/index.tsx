import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './bemit/scoutix.scss';
import 'react-toastify/dist/ReactToastify.min.css';

import './utils/Declarations/declaration.d.ts';
import { store } from './utils/Redux/store';

import App from './components/Trumps/Domain/App/App';
import Admin from './components/Trumps/Domain/Admin/Admin';
import WatcherStore from './components/Trumps/Helper/HOC/WatcherStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WatcherStore>
        {window.location.origin.includes('iplmi03kw9aw.') ? <Admin/> : <App/>}
      </WatcherStore>
    </Provider>
  </React.StrictMode>,
  document.getElementById('CAKVPC5r8tJ9')
);
