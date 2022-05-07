import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Adminter from '../../Router/Adminter';

const Admin = (): JSX.Element => <Router>
  <Adminter />
</Router>;

export default Admin;
