import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Authentication from '../../../Templates/Authentication/Authentication';
import Container from '../../../Atoms/Container/Container';
import PageTitle from '../../../Atoms/Title/Page/PageTitle';
import useSleep from '../../../Trumps/Helper/Hook/Sleep';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const redirect = async () => {
    await useSleep(3000);
    navigate('/');
  }

  const userState = localStorage.getItem('userState') && JSON.parse(localStorage.getItem('userState'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (userState || token) {
      localStorage.clear();
      redirect();
    }
  }, []);

  return <Authentication>
    <Container>
      <PageTitle>Se déconnecter</PageTitle>
    </Container>
  </Authentication>;
};

export default Logout;
