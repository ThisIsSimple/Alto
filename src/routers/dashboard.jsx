import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages';

const DashboardRouter = [
  {
    path: '/',
    component: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },
];

export default DashboardRouter;
