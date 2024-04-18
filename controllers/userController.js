// userController.js
const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({
            success: true,
            users,
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Error fetching users" });
    }
};

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await User.create({
            username,
            email,
            password
        });
        res.status(201).cookie("tempi", "lol").json({
            success: true,
            message: "Registered Successfully",
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ success: false, message: "Error registering user" });
    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        await User.findByIdAndDelete(userId);
        res.json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ success: false, message: "Error deleting user" });
    }
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    try {
        await User.findByIdAndUpdate(userId, { username, email, password });
        res.json({ success: true, message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ success: false, message: "Error updating user" });
    }
};

module.exports = {
    getAllUsers,
    register,
    deleteUser,
    updateUser
};
 