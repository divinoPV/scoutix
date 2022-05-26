import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../../Organisms/Global/Footer/Footer';
import Header from '../../../Organisms/Global/Header/Header';
import Main from '../../../Atoms/Main/Main';
import Navbar from '../../../Molecules/App/Nav/Header/Navbar';

const Home: React.FC = () => {
  return <>
    <Header nav={ <Navbar /> } />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>;
};

export default Home;
