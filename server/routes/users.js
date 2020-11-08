const router = require('express').Router();
//importing the function from  userControllers.js
const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require('../controllers/usersController');


//this is a test to see if the Router works
router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);





module.exports = router;