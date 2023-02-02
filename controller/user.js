const {
    createUser,
    findUserById,
    updateUserById,
    getAllUsers,
    deleteUserById
} = require('../models/user');

// create new user
exports.createNewUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await createUser({ email, password });

    if (user) {
        res.status(200).json({
            message: 'User created successfully',
            data: user
        });
    } else {
        res.status(400).json({ message: 'User not created' });
    }
};

// get all users
exports.getAllUsers = async (req, res) => {
    const users = await getAllUsers();
    if (users) {
        res.status(200).json({
            message: 'Users fetched successfully',
            data: users
        });
    } else {
        res.status(400).json({ message: 'Users not found' });
    }
}

// get user by query
exports.getUserById = async (req, res) => {
    const user = await findUserById(req.params.userId);
    if (user) {
        res.status(200).json({
            message: 'User fetched successfully',
            data: user
        });
    } else {
        res.status(400).json({ message: 'User not found' });
    }
}

// update user by id
exports.updateUserById = async (req, res) => {
    const user = await updateUserById(req.params.userId, req.body);
    if (user) {
        res.status(200).json({
            message: 'User updated successfully',
            data: user
        });
    } else {
        res.status(400).json({ message: 'User not updated' })
    }
}

// delete user by id
exports.deleteUserById = async (req, res) => {
    const user = await deleteUserById(req.params.userId);
    if (user) {
        res.status(200).json({
            message: 'User deleted successfully',
            data: user
        });
    } else {
        res.status(400).json({ message: 'User not deleted' })
    }
}






