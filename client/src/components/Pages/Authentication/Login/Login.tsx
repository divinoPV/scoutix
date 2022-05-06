import React from 'react';

import Authentication from '../../../Templates/Authentication/Authentication';
import Container from '../../../Atoms/Container/Container';
import PageTitle from '../../../Atoms/Title/Page/PageTitle';

const Login: React.FC = () => {
  return <Authentication>
    <Container>
      <PageTitle>Se connecter</PageTitle>
    </Container>
  </Authentication>;
};

export default Login;
