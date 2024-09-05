import { createBrowserRouter } from 'react-router-dom';
import Home from '../HomePage/Home';
import MainLayout from '../MainLayout/MainLayout';
import Login from '../component/Login/Login';
import Review from '../component/Review/Review';
import ServicesPage from '../component/ServicesPage/ServicesPage';
import Signup from '../component/Signup/Signup';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
        loader:()=>fetch(`http://localhost:5000/services`),
        children: [
          {
            path: '/services/:serviceId/reviews',
            element: <Review />,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.serviceId}`), 
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    
    ],
  },
]);

export default routes;
