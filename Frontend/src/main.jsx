import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from "../src/components/ErrorPage.jsx";
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/home/home.jsx'
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/Search.jsx';
import { element } from 'prop-types';
import SingleProduct from './components/SingleProduct.jsx';
import Recipes from './components/Recipes.jsx';
import Resources from './components/Resources.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/categories/:category",
        element: <CategoryPage/>
      },
      {
        path: "/search",
        element: <Search/>
      },

    {
        path: "/items/:id",
        element: < SingleProduct/>,
        loader: ({params}) => fetch=('https://localhost:5000/api/products/${params.id}'),
    },
    {
        path : "/recipes",
        element: <Recipes/>
    },
    {
        path: "/resources",
        element: <Resources/>
    },
    {
        path: "/about",
        // element: <About/>
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
