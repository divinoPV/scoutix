import React from 'react';
import { useRoutes } from 'react-router-dom';

import Loading from '../Loader/Default/Loading';

const BackOffice = React.lazy(
  () => import('../../Templates/Admin/BackOffice/BackOffice')
);
const Dashboard = React.lazy(
  () => import('../../Pages/Admin/Dashboard/Dashboard')
);
const EventCategory = React.lazy(
  () => import('../../Pages/Admin/Crud/EventCategory/EventCategory')
);
const Login = React.lazy(
  () => import('../../Pages/Authentication/Login/Login')
);
const Logout = React.lazy(
  () => import('../../Pages/Authentication/Logout/Logout')
);
const Role = React.lazy(
  () => import('../../Pages/Admin/Authorization/Role/Role')
);
const Scope = React.lazy(
  () => import('../../Pages/Admin/Crud/Scope/Scope')
);

const ScopeChoice= React.lazy(
  () => import('../../Pages/Authentication/Scope/Scope')
);

const User = React.lazy(
  () => import('../../Pages/Admin/Crud/User/User')
);

const Adminter: React.FC = () => <>
  { useRoutes([
    {
      path: '/', element: <Loading><BackOffice /></Loading>, children: [
        { path: '/', element: <Dashboard /> },
        { path: '/categorie-evenement', element: <EventCategory /> },
        { path: '/autorisation-role', element: <Role /> },
        { path: '/scope', element: <Scope /> },
        { path: '/utilisateur', element: <User /> },
      ]
    },
    { path: '/connexion', element: <Loading><Login /></Loading> },
    { path: '/deconnexion', element: <Loading><Logout /></Loading> },
    { path: '/changement-de-scope', element: <Loading><ScopeChoice /></Loading> },
  ]) }
</>;

export default Adminter;
