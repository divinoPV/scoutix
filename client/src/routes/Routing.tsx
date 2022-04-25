import React from 'react';
import { useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('../components/Pages/Home'));

type Props = {
  children: JSX.Element,
};

function Routing(): JSX.Element {

  const Loading: React.FC<Props> = ({ children }) => (
    <React.Suspense fallback={<div>loading...</div>}>
      { children }
    </React.Suspense>
  )

  const routes = useRoutes([
    {
      path: '/',
      element: <Loading><Home /></Loading>,
    },
  ]);

  return <>{routes}</>
}

export default Routing;
