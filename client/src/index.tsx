import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Admin from './admin/Admin';

ReactDOM.render(
  <React.StrictMode>
    {window.location.origin.includes('iplmi03kw9aw.') ? <Admin /> : <App />}
  </React.StrictMode>,
  document.getElementById('CAKVPC5r8tJ9')
);
