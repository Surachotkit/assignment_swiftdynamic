import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import Home from '../page/Home';
import ManageForm from '../page/ManageForm';
import Detail from '../page/Detail';


const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/manage',
    element: <ManageForm />,
  },
  {
    path: '/detail',
    element: <Detail />,
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
