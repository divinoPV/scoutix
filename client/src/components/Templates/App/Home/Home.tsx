import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './Home.module.scss';

import Footer from '../../../Organisms/Global/Footer/Footer';
import Header from '../../../Organisms/Global/Header/Header';
import Main from '../../../Atoms/Main/Main';
import Navbar from '../../../Molecules/App/Nav/Header/Navbar';

const Home: React.FC = () => {
  return <>
    <Header nav={ <Navbar /> } />
    <Main className={ `${ style['Home__main'] }` }>
      <Outlet />
    </Main>
    <Footer />
  </>;
};

export default Home;
