import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import Home from '../page/Home';
import ManageForm from '../page/ManageForm';

// interface ManageFormProps {
//   // Define ManageForm component props if any
// }

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/manage',
    element: <ManageForm />,
  },
];

const router = createBrowserRouter(routerConfig);

// interface RouterProps {
//   // Define Router component props if any
// }

const Router: React.FC = () => {
  return <RouterProvider router={router}/>
};

export default Router;
