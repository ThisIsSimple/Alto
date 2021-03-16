import React from 'react';
import AuthLayout from '../layouts/AuthLayout';
import AuthLogin from '../pages/auth/login';
import AuthLogout from '../pages/auth/logout';
import AuthRegister from '../pages/auth/register';

const AuthRouter = [
  {
    publicRoute: true,
    path: '/auth/login',
    component: (
      <AuthLayout>
        <AuthLogin />
      </AuthLayout>
    ),
  },
  {
    publicRoute: true,
    path: '/auth/register',
    component: (
      <AuthLayout>
        <AuthRegister />
      </AuthLayout>
    ),
  },
  {
    publicRoute: true,
    path: '/auth/logout',
    component: (
      <AuthLayout>
        <AuthLogout />
      </AuthLayout>
    ),
  },
];

export default AuthRouter;
