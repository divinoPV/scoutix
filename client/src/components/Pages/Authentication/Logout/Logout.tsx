import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAppDispatch } from '../../../../utils/Redux/store';
import { logout } from '../../../../utils/Redux/Slice/User';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  dispatch(logout());
  localStorage.clear();

  return <Navigate to={ '/' } />;
};

export default Logout;
