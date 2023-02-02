const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
},
    { timestamps: true }
);

const UserModel = mongoose.model('User', userSchema);

// create new user
exports.createUser = (obj) => {
    const user = UserModel.create(obj);
    return user;
}

// find user
exports.findUserById = (_id) => {
    const user = UserModel.findById(_id);
    return user;
}

// update user
exports.updateUserById = (_id, obj) => {
    const user = UserModel.findByIdAndUpdate(_id, obj, { new: true });
    return user;
}

// get all users
exports.getAllUsers = () => {
    const users = UserModel.find({});
    return users;
}

// delete user
exports.deleteUserById = (_id) => {
    const user = UserModel.findByIdAndDelete(_id);
    return user;
}