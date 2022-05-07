import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './Home.module.scss';

import Footer from '../../../Organisms/Footer/App/Footer';
import Header from '../../../Organisms/Header/App/Header';
import Main from '../../../Atoms/Main/Main';

const Home: React.FC = () => {
  return <>
    <Header />
    <Main className={ `${ style['Home__main'] }` }>
      <Outlet />
    </Main>
    <Footer />
  </>;
};

export default Home;
