import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorPage from "../src/components/ErrorPage.jsx";
import './index.css';
import App from './App.jsx';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/Search.jsx';
import Recipes from './components/Recipes.jsx';
import Resources from './components/Resources.jsx';
import About from './pages/about/About.jsx';
import Contacts from './pages/contact/Contacts.jsx';
import SingleProduct from './pages/items/SingleProduct.jsx';
import Signup from './pages/auth/Signup.jsx';
import Login from './pages/auth/Login.jsx';
import AddRecipe from './pages/AddRecipe.jsx'; // Import AddRecipe component
import RecipeList from './pages/RecipeList.jsx'; // Import RecipeList component
import EditRecipe from './pages/EditRecipe.jsx'; // Import EditRecipe component

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/categories/:category",
                element: <CategoryPage />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/recipes",
                element: <Recipes />
            },
            {
                path: "/resources",
                element: <Resources />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contacts />
            },
            {
                path: "/items/:id",
                element: <SingleProduct />,
                loader: ({ params }) => fetch(`http://localhost:5000/api/items/${params.id}`)
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/add-recipe", // Add route for adding recipes
                element: <AddRecipe />
            },
            {
                path: "/my-recipes", // Add route for listing recipes
                element: <RecipeList />
            },
            {
                path: "/edit-recipe/:id", // Add route for editing recipes
                element: <EditRecipe />
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
);