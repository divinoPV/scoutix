import React from 'react';
import { useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('../../Pages/App/Home/Home'));
const Login = React.lazy(() => import('../../Pages/App/Login/Login'));

type Props = {
  children: JSX.Element,
};

const Appter = (): JSX.Element => {
  const Loading: React.FC<Props> = ({ children }) => (
    <React.Suspense fallback={ <div>loading...</div> }>
      { children }
    </React.Suspense>
  );

  return <>
    { useRoutes([
      { path: '/', element: <Loading><Home /></Loading> },
      { path: '/connexion', element: <Loading><Login /></Loading> },
    ]) }
  </>;
};

export default Appter;
