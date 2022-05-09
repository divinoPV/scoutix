import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Adminter from '../../Router/Adminter';
import UserChecker from '../../Helper/HOC/UserChecker';

const Admin: React.FC = () => <Router>
  <UserChecker>
    <Adminter/>
  </UserChecker>
</Router>;

export default Admin;
