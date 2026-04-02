import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Products from '../pages/Products';
import Cooperation from '../pages/Cooperation';
import Contact from '../pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'cooperation',
        element: <Cooperation />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
