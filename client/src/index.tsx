import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './bemit/modulo.scss';

import { store } from './store';
import App from './app/App';
import Admin from './admin/Admin';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {window.location.origin.includes('iplmi03kw9aw.') ? <Admin /> : <App />}
    </Provider>
  </React.StrictMode>,
  document.getElementById('CAKVPC5r8tJ9')
);
