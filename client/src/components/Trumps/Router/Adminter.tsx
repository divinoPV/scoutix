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
const Logout = React.lazy(
  () => import('../../Pages/Authentication/Logout/Logout')
);
const Role = React.lazy(
  () => import('../../Pages/Admin/Authorization/Role/Role')
);
const Scope = React.lazy(
  () => import('../../Pages/Admin/Crud/Scope/Scope')
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
    { path: '/deconnexion', element: <Loading><Logout /></Loading> },
  ]) }
</>;

export default Adminter;
