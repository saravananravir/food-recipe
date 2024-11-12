import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipes.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    recipe_name: '',
    cuisine: '',
    ingredients: '',
    instructions: ''
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios.get('http://34.215.190.124:8000/api/recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://34.215.190.124:8000/api/add/', newRecipe)
      .then(response => {
        fetchRecipes(); // Refresh recipes after adding a new one
        setShowForm(false); // Close the form after successful submission
        setNewRecipe({ // Clear the form fields
          recipe_name: '',
          cuisine: '',
          ingredients: '',
          instructions: ''
        });
      })
      .catch(error => {
        console.error('Error adding recipe:', error);
      });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="recipes-container">
      <h2>Our Recipes</h2>
      <button onClick={toggleForm} className="add-recipe-btn">Add Recipe</button>
      
      {showForm && (
        <div className="add-recipe-form">
          <h3 style={{ color: '#000'}} >Add New Recipe</h3>
          <form onSubmit={handleSubmit}>
            <label style={{ color: '#000'}} htmlFor="recipe_name">Name:</label>
            <input
              type="text"
              id="recipe_name"
              name="recipe_name"
              value={newRecipe.recipe_name}
              onChange={handleInputChange}
              required
            />
            <label style={{ color: '#000'}} htmlFor="cuisine">Cuisine:</label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={newRecipe.cuisine}
              onChange={handleInputChange}
            />
            <label style={{ color: '#000'}} htmlFor="ingredients">Ingredients:</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
              required
            />
            <label style={{ color: '#000'}} htmlFor="instructions">Instructions:</label>
            <textarea
              id="instructions"
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add</button>
          </form>
        </div>
      )}

      <table className="recipes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Uploaded By</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.recipe_name}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td>{recipe.uploaded_by}</td>
              <td>{new Date(recipe.date_last_modified).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recipes;