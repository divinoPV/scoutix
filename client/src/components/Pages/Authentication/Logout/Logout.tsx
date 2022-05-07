import React from 'react';

import Authentication from '../../../Templates/Authentication/Authentication';
import Container from '../../../Atoms/Container/Container';
import PageTitle from '../../../Atoms/Title/Page/PageTitle';

const Logout: React.FC = () => {
  return <Authentication>
    <Container>
      <PageTitle>Se déconnecter</PageTitle>
    </Container>
  </Authentication>;
};

export default Logout;
