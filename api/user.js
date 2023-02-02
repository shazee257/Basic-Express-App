const router = require('express').Router();

const {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
} = require('../controller/user');

// create new user
router.post('/', createNewUser);

// get all users
router.get('/', getAllUsers);

// get user by query
router.get('/:userId', getUserById);

// update user by id
router.put('/:userId', updateUserById);

// delete user by id
router.delete('/:userId', deleteUserById);


module.exports = router;