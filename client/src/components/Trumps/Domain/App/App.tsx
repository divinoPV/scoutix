import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Appter from '../../Router/Appter';
import UserChecker from '../../Helper/HOC/UserChecker';

const App: React.FC = () => <Router>
  <UserChecker>
    <Appter />
  </UserChecker>
</Router>;

export default App;
