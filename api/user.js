const router = require('express').Router();

const {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
} = require('../controller/user');

// create new user
router.post('/', createNewUser);

// get all users
router.get('/', getAllUsers);

// get user by query
router.get('/:userId', getUserById);

// update user by id
router.put('/:userId', updateUserById);



module.exports = router;