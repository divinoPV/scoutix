import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import style from './BackOffice.module.scss';

import Footer from '../../../Organisms/Global/Footer/Footer';
import Header from '../../../Organisms/Global/Header/Header';
import Main from '../../../Atoms/Main/Main';
import Navbar from '../../../Molecules/Admin/Nav/Header/Navbar';
import { Store, useSelectorook } from '../../../../utils/Redux/store';

const BackOffice: React.FC = () => {
  const user = useSelectorook((state: Store) => state.user);

  return user.logged
    ? <>
      <Header nav={ <Navbar /> } />
      <Main className={ `${ style['BackOffice__main'] }` }>
        <Outlet />
      </Main>
      <Footer />
    </>
    : <Navigate to="/connexion" />;
};

export default BackOffice;
