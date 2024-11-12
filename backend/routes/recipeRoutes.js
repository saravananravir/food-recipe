const express = require('express');
const { getAllRecipes, addRecipe, getRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Public Routes
router.get('/', getAllRecipes);
router.get('/:id', getRecipe);

// Protected Routes
router.post('/', authMiddleware, addRecipe);
router.put('/:id', authMiddleware, updateRecipe);
router.delete('/:id', authMiddleware, deleteRecipe);

module.exports = router;
