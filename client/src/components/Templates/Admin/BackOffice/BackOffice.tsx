import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import style from './BackOffice.module.scss';

import Footer from '../../../Organisms/Global/Footer/Footer';
import Header from '../../../Organisms/Global/Header/Header';
import Main from '../../../Atoms/Main/Main';
import Navbar from '../../../Molecules/Admin/Nav/Header/Navbar';
import { Store, useAppSelector } from '../../../../utils/Redux/store';

const BackOffice: React.FC = () => {
  const user = useAppSelector((state: Store) => state.user);

  return user.logged
    ? <>
      <Header nav={ <Navbar /> } />
      <Main className={ `${ style['BackOffice__main'] }` }>
        <Outlet />
      </Main>
      <Footer />
      <ToastContainer />
    </>
    : <Navigate to="/connexion" />;
};

export default BackOffice;
