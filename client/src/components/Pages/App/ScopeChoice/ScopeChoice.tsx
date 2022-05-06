import React from 'react';
import Header from '../../../Organisms/Header/App/Header';
import Main from '../../../Atoms/Main/Main';
import Container from '../../../Atoms/Container/Container';
import PageTitle from '../../../Atoms/Title/Page/PageTitle';
import Footer from '../../../Organisms/Footer/App/Footer';

const ScopeChoice: React.FC = () => {
  return  <>
    <Header />
    <Main>
      <Container>
        <PageTitle>Changement de scope</PageTitle>
      </Container>
    </Main>
    <Footer />
  </>;
};

export default ScopeChoice;
