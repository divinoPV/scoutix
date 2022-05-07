import React from 'react';

import style from './Authentication.module.scss';

import Footer from '../../Organisms/Global/Footer/Footer';
import Header from '../../Organisms/Global/Header/Header';
import Main from '../../Atoms/Main/Main';
import Navbar from '../../Molecules/Authentication/Nav/Header/Navbar';

const Authentication: React.FC = ({ children }) => {
  return <>
    <Header nav={ <Navbar /> } />
    <Main className={ `${ style['Authentication__main'] }` }>
      { children }
    </Main>
    <Footer />
  </>;
};

export default Authentication;
