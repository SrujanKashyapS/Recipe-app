import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/items'); // Adjust the endpoint as needed
                setRecipes(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching recipes');
            } finally {
                setLoading(false);
            }
        };
        fetchRecipes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/items/${id}`);
            setRecipes(recipes.filter(recipe => recipe._id !== id));
            alert('Recipe deleted successfully!');
        } catch (error) {
            console.error(error);
            alert('Error deleting recipe');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Your Recipes</h2>
            <button>
                <Link to="/add-recipe">Add New Recipe</Link>
            </button>
            {recipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                <ul>
                    {recipes.map(recipe => (
                        <li key={recipe._id}>
                            <h3>{recipe.name}</h3>
                            <Link to={`/edit-recipe/${recipe._id}`}>Edit</Link>
                            <button onClick={() => handleDelete(recipe._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecipeList;