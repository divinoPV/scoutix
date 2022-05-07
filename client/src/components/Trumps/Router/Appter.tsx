import React from 'react';
import { useRoutes } from 'react-router-dom';

import Loading from '../Loader/Default/Loading';

const Connected = React.lazy(
  () => import('../../Pages/App/Home/Connected/Connected')
);
const Dashboard = React.lazy(
  () => import('../../Pages/Admin/Dashboard/Dashboard')
);
const Home = React.lazy(() => import('../../Templates/App/Home/Home'));
const Login = React.lazy(
  () => import('../../Pages/Authentication/Login/Login')
);
const Logout = React.lazy(
  () => import('../../Pages/Authentication/Logout/Logout')
);
const ScopeChoice = React.lazy(
  () => import('../../Pages/App/ScopeChoice/ScopeChoice')
);

const Appter: React.FC = () => <>
  { useRoutes([
    {
      path: '/', element: <Loading><Home /></Loading>, children: [
        { path: '/', element: <Connected /> },
        {
          path: '/changement-de-scope',
          element: <Loading><ScopeChoice /></Loading>
        },
      ]
    },
    { path: '/connexion', element: <Loading><Login /></Loading> },
    { path: '/deconnexion', element: <Loading><Logout /></Loading> },
  ]) }
</>;

export default Appter;
