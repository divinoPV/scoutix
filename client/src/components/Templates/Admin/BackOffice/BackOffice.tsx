import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './BackOffice.module.scss';

import Footer from '../../../Organisms/Global/Footer/Footer';
import Header from '../../../Organisms/Global/Header/Header';
import Main from '../../../Atoms/Main/Main';
import Navbar from '../../../Molecules/Admin/Nav/Header/Navbar';

const BackOffice: React.FC = () => {
  return <>
    <Header nav={ <Navbar /> } />
    <Main className={ `${ style['BackOffice__main'] }` }>
      <Outlet />
    </Main>
    <Footer />
  </>;
};

export default BackOffice;
