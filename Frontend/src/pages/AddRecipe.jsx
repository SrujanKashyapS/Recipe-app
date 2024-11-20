import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        category: '',
        instructions: '',
        ingredients: [],
        more: {
            prep_time: '',
            cooking_time: '',
            serving: '',
            difficulty: '',
            source: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleIngredientChange = (index, e) => {
        const { name, value } = e.target;
        const newIngredients = [...recipe.ingredients];
        newIngredients[index] = { ...newIngredients[index], [name]: value };
        setRecipe({ ...recipe, ingredients: newIngredients });
    };

    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, { name: '', quantity: '' }] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/items', recipe);
            alert('Recipe added successfully!');
        } catch (error) {
            console.error(error);
            alert('Error adding recipe');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Recipe Name" onChange={handleChange} required />
            <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
            <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required></textarea>
            {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>
                    <input type="text" name="name" placeholder="Ingredient Name" onChange={(e) => handleIngredientChange(index, e)} required />
                    <input type="text" name="quantity" placeholder="Quantity" onChange={(e) => handleIngredientChange(index, e)} required />
                </div>
            ))}
            <button type="button" onClick={addIngredient}>Add Ingredient</button>
            <input type="text" name="prep_time" placeholder="Preparation Time " onChange={handleChange} />
            <input type="text" name="cooking_time" placeholder="Cooking Time" onChange={handleChange} />
            <input type="text" name="serving" placeholder="Serving" onChange={handleChange} />
            <input type="text" name="difficulty" placeholder="Difficulty" onChange={handleChange} />
            <input type="text" name="source" placeholder="Source" onChange={handleChange} />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;