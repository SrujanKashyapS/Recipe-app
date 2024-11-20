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
        <form onSubmit={handleSubmit} className='mt-10'>
            <input type="text" name="name" placeholder="Recipe Name" onChange={handleChange} required /><br/><br/>
            <input type="text" name="category" placeholder="Category" onChange={handleChange} required /><br/><br/>
            <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required>
            </textarea><br/><br/>
            {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>
                    <input type="text" name="name" placeholder="Ingredient Name" onChange={(e) => handleIngredientChange(index, e)} required /><br/>
                    <input type="text" name="quantity" placeholder="Quantity" onChange={(e) => handleIngredientChange(index, e)} required /><br/>
                </div>
            ))}
            <button type="button" onClick={addIngredient}>Add Ingredient</button><br/><br/>
            <input type="text" name="prep_time" placeholder="Preparation Time " onChange={handleChange} /><br/><br/>
            <input type="text" name="cooking_time" placeholder="Cooking Time" onChange={handleChange} /><br/><br/>
            <input type="text" name="serving" placeholder="Serving" onChange={handleChange} /><br/><br/>
            <input type="text" name="difficulty" placeholder="Difficulty" onChange={handleChange} /><br/><br/>
            <input type="text" name="source" placeholder="Source" onChange={handleChange} /><br/><br/>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;