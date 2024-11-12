const User = require('../models/User');
const Recipe = require('../models/Recipe');

// Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userRecipes = await Recipe.find({ author: req.user.id });
    res.status(200).json({ user, recipes: userRecipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
  const { name, email } = req.body;
  
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update profile' });
  }
};
