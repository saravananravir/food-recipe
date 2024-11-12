const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('author', 'name');
    res.json(recipes);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('author', 'name');
    res.json(recipe);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.addRecipe = async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  try {
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      author: req.user.id,
    });
    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.updateRecipe = async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    recipe.title = title || recipe.title;
    recipe.ingredients = ingredients || recipe.ingredients;
    recipe.instructions = instructions || recipe.instructions;
    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await recipe.remove();
    res.json({ msg: 'Recipe deleted' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
