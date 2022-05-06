import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Home.module.scss';

import Footer from '../../../Organisms/Footer/App/Footer';
import Header from '../../../Organisms/Header/App/Header';
import Main from '../../../Atoms/Main/Main';

const Home: React.FC = () => {
  return <>
    <Header />
    <Main className={ `${ styles['Home__main'] }` }>
      <Outlet />
    </Main>
    <Footer />
  </>;
};

export default Home;
