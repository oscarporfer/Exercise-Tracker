const User = require('../db/config/models/user');

//gets all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
      res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

//gets one user
const getOneUser = async (req, res) => {
  try {
    const user = await await User.findById({ _id: req.params.id }).populate('exercises');;
      res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};


//creates a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//Deletes a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({_id: req.params.id});
    await user.remove();
    res.status(200).json({ message: 'User has been deleted!' });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//Update a user
const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id})
    user.name = req.body.name;
    user.email = req.body.email;
    await user.save();
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })

  }
}


module.exports = { getAllUsers, createUser, getOneUser, deleteUser, updateUser };