import React from 'react';

import Container from '../../../Atoms/Container/Container';
import Footer from '../../../Organisms/Footer/App/Footer';
import Header from '../../../Organisms/Header/App/Header';
import Main from '../../../Atoms/Main/Main';
import PageTitle from '../../../Atoms/Title/Page/PageTitle';

const Login: React.FC = () => {
  return <>
    <Header />
    <Main>
      <Container>
        <PageTitle>Connexion</PageTitle>
      </Container>
    </Main>
    <Footer />
  </>;
};

export default Login;
