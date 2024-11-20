import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/items/${id}`);
                setRecipe(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching recipe');
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/items/${id}`, recipe);
            alert('Recipe updated successfully!');
        } catch (error) {
            console.error(error);
            alert('Error updating recipe');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={recipe.name} onChange={handleChange} required /><br/><br/>
            <input type="text" name="category" value={recipe.category} onChange={handleChange} required /><br/><br/>
            <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required></textarea><br/><br/>
            {/* Add fields for ingredients, prep time, etc. */}
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipe;