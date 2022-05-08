import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Appter from '../../Router/Appter';
import { store } from '../../../../utils/Redux/store';

const App: React.FC = () => <Provider store={ store }>
  <Router>
    <Appter />
  </Router>
</Provider>;

export default App;
