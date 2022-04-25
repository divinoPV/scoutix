import React from 'react';

const Home = React.lazy(() => import('../components/Pages/Home'));
const Login = React.lazy(() => import('../components/Pages/Login'));

export default [
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/',
    element: <Home/>,
  },
]
