import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './bemit/modulo.scss';

import { store } from './utils/Redux/store';

import App from './components/Trumps/Env/App/App';
import Admin from './components/Trumps/Env/Admin/Admin';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      { window.location.origin.includes('iplmi03kw9aw.') ? <Admin /> : <App /> }
    </Provider>
  </React.StrictMode>,
  document.getElementById('CAKVPC5r8tJ9')
);
