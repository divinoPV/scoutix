import React from 'react';

import Userecker from './Userecker';
import Scopecker from './Scopecker';

const Checker: React.FC = (
  {
    children,
  }
) => <Userecker>
  <Scopecker>
    { children }
  </Scopecker>
</Userecker>;

export default Checker;
