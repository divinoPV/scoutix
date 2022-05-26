import React from 'react';

import Storatcher from './Storatcher';

const Watcher: React.FC = (
  {
    children,
  }
) => <Storatcher>
  { children }
</Storatcher>;

export default Watcher;
