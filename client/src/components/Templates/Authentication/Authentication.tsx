import React from 'react';

import Header from '../../Organisms/Global/Header/Header';
import Main from '../../Atoms/Main/Main';
import Navbar from '../../Molecules/Authentication/Nav/Header/Navbar';

const Authentication: React.FC<{
  classMain?: string;
}> = (
  {
    children,
    classMain,
  }
) => {
  return <>
    <Header fromAuth={ true } nav={ <Navbar /> } />
    <Main className={ `${ classMain }` }>
      { children }
    </Main>
  </>;
};

export default Authentication;
