import React from 'react';
import logo from '/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-primary">
            <Link to="/">
                <img src={logo} alt="logo" className="h-10" />
            </Link>
            <div className="flex items-center gap-4">
                <Link to="/add-recipe">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add New Recipe
                    </button>
                </Link>
                <Link to="/login">
                    <button className="text-secondary px-4 py-2 rounded">Log In</button>
                </Link>
                <Link to="/signup">
                    <button className="text-secondary px-4 py-2 rounded">Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;