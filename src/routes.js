import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/list-groups', name: 'Company', component: ListGroups },
  { path: '/base/form', name: 'Company Form', component: Forms },
];

export default routes;
