import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './bemit/scoutix.scss';

import './utils/Declarations/declaration.d.ts';
import { store } from './utils/Redux/store';

import App from './components/Trumps/Domain/App/App';
import Admin from './components/Trumps/Domain/Admin/Admin';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      { window.location.origin.includes('iplmi03kw9aw.') ? <Admin /> : <App /> }
    </Provider>
  </React.StrictMode>,
  document.getElementById('CAKVPC5r8tJ9')
);
