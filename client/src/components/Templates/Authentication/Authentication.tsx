import React from 'react';

import style from './Authentication.module.scss';

import Footer from '../../Organisms/Footer/App/Footer';
import Header from '../../Organisms/Header/Authentication/Header';
import Main from '../../Atoms/Main/Main';

const Authentication: React.FC = ({ children }) => {
  return <>
    <Header />
    <Main className={ `${ style['Authentication__main'] }` }>
      { children }
    </Main>
    <Footer />
  </>;
};

export default Authentication;
