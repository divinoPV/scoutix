import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './bemit/scoutix.scss';

import './utils/Declarations/declaration.d.ts';
import { store } from './utils/Redux/store';
import App from './components/Trumps/Domain/App/App';
import Admin from './components/Trumps/Domain/Admin/Admin';
import Checker from './components/Trumps/Checker/Checker';
import Watcher from './components/Trumps/Watcher/Watcher';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <Watcher>
          <Checker>
            { window.location.origin.includes('iplmi03kw9aw.')
              ? <Admin />
              : <App />
            }
            <ToastContainer />
          </Checker>
        </Watcher>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('CAKVPC5r8tJ9')
);
