import React from 'react';
import { useRoutes } from 'react-router-dom';

import Loading from '../Loader/Default/Loading';
import { Store, useSelectorook } from '../../../utils/Redux/store';

const Agenda = React.lazy(
  () => import('../../Pages/App/Agenda/Agenda')
);
const Directory = React.lazy(
  () => import('../../Pages/App/Directory/Directory')
);
const Connected = React.lazy(
  () => import('../../Pages/App/Home/Connected/Connected')
);
const Disconnect = React.lazy(
  () => import('../../Pages/App/Home/Disconnect/Disconnect')
);
const Document = React.lazy(
  () => import('../../Pages/App/Document/Document')
);
const Home = React.lazy(() => import('../../Templates/App/Home/Home'));
const Login = React.lazy(
  () => import('../../Pages/Authentication/Login/Login')
);
const Logout = React.lazy(
  () => import('../../Pages/Authentication/Logout/Logout')
);
const Messaging = React.lazy(
  () => import('../../Pages/App/Messaging/Messaging')
);
const Scope = React.lazy(
  () => import('../../Pages/Authentication/Scope/Scope')
);

const Appter: React.FC = () => {
  const user = useSelectorook((state: Store) => state.user);

  return <>
    { useRoutes([
      {
        path: '/', element: <Loading><Home /></Loading>, children: [
          { path: '/', element: user.logged ? <Connected /> : <Disconnect /> },
          {
            path: '/annuaire',
            element: <Loading><Directory /></Loading>
          },
          {
            path: '/agenda',
            element: <Loading><Agenda /></Loading>
          },
          {
            path: '/documents',
            element: <Loading><Document /></Loading>
          },
          {
            path: '/messagerie',
            element: <Loading><Messaging /></Loading>
          },
        ]
      },
      { path: '/connexion', element: <Loading><Login /></Loading> },
      { path: '/deconnexion', element: <Loading><Logout /></Loading> },
      {
        path: '/changement-de-scope',
        element: <Loading><Scope /></Loading>
      },
    ]) }
  </>;
};

export default Appter;
