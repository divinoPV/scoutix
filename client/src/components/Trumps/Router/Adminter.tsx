import { useRoutes } from 'react-router-dom';
import React from 'react';

const Home = React.lazy(() => import('../../Pages/App/Home/Home'));

type Props = {
  children: JSX.Element,
};

const Adminter = (): JSX.Element => {
  const Loading: React.FC<Props> = ({ children }) => (
    <React.Suspense fallback={ <div>loading...</div> }>
      { children }
    </React.Suspense>
  );

  return <>
    { useRoutes([
      { path: '/', element: <Loading><Home /></Loading> },
    ]) }
  </>;
};

export default Adminter;
