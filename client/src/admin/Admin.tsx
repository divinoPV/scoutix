import React from 'react';
import logo from './../logo.svg';

function Admin() {
  return (
    <div className="Admin">
      <header className="Admin-header">
        <img src={logo} className="Admin-logo" alt="logo" />
        <span>Admin</span>
        <p>
          Edit <code>src/Admin.tsx</code> and save to reload.
        </p>
        <a
          className="Admin-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Admin;
