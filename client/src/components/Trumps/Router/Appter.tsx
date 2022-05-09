import React from 'react';
import { useRoutes } from 'react-router-dom';

import Loading from '../Loader/Default/Loading';
import { Store, useAppSelector } from '../../../utils/Redux/store';

const Connected = React.lazy(
  () => import('../../Pages/App/Home/Connected/Connected')
);
const Disconnect = React.lazy(
  () => import('../../Pages/App/Home/Disconnect/Disconnect')
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

const Appter: React.FC = () => {
  const user = useAppSelector((state: Store) => state.user);

  return <>
    { useRoutes([
      {
        path: '/', element: <Loading><Home /></Loading>, children: [
          { path: '/', element: user.logged ? <Connected /> : <Disconnect /> },
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
}

export default Appter;
