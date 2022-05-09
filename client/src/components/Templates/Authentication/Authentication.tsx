import React from 'react';

import Header from '../../Organisms/Global/Header/Header';
import Main from '../../Atoms/Main/Main';
import Navbar from '../../Molecules/Authentication/Nav/Header/Navbar';

const Authentication: React.FC = ({ children }) => {
  return <>
    <Header fromAuth={ true } nav={ <Navbar /> } />
    <Main>
      { children }
    </Main>
  </>;
};

export default Authentication;
