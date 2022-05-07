import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './BackOffice.module.scss';

import Footer from '../../../Organisms/Footer/App/Footer';
import Header from '../../../Organisms/Header/Admin/Header';
import Main from '../../../Atoms/Main/Main';

const BackOffice: React.FC = () => {
  return <>
    <Header />
    <Main className={ `${style['BackOffice__main']}` }>
      <Outlet />
    </Main>
    <Footer />
  </>;
};

export default BackOffice;
