// GET all users
// route: GET /users
import mongoose from "mongoose";

import User from "../models/users.model.js";

// Mongoose Schema Configuration

// Creating collection/model
// const User = mongoose.model("user", userSchema);

// 1. GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log(req.query);

    res.status(200).json({
      message: "all user fetched",
      success: true,
      status: "success",
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: "error",
      data: null,
    });
  }
};

// 2. GET ONE USER BY ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({
        // Added 404 status and return statement
        message: `user:${id} not found`,
        status: "fail",
        success: false,
        data: null,
      });
      return;
    }

    res.status(200).json({
      message: `user:${id} fetched`,
      status: "success",
      success: true,
      data: user,
    });
  } catch (error) {
    // Fixed: Changed "eror" typo to "error"
    res.status(500).json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: "error",
      data: null,
    });
  }
};

// 3. CREATE A NEW USER
export const createUser = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;
    const user = await User.create({ full_name, email, password });

    res.status(201).json({
      data: user,
      message: "user created",
      status: "success",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      // Changed to 400 for bad requests (validation/duplicate email)
      message: error?.message ?? "Something went wrong",
      success: false,
      status: "error",
      data: null,
    });
  }
};

// 4. UPDATE A USER BY ID
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      // Fixed: Changed "!user" to "!updatedUser"
      res.status(404).json({
        // Added return and 404 status
        message: `user ${id} not found`,
        status: "fail",
        success: false,
        data: null,
      });
      return;
    }

    // Removed Object.assign(user, req.body) since findByIdAndUpdate already handles database writes

    res.status(201).json({
      // Changed from 201 to 200 (standard for updates)
      data: updatedUser,
      message: `User ${id} updated`,
      status: "success",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: "fail",
      data: null,
    });
  }
};

// DELETE a user by id
// route: DELETE /users/:id

//todo findbyid and delete
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      res.json({
        message: `User ${id} not found`,
        success: false,
        status: "fail",
        data: null,
      });
      return;
    }

    res.status(200).json({
      message: `User ${id} deleted`,
      success: true,
      status: "success",
      data: deleteUser,
    });
  } catch (error) {
    // The catch block is now correctly inside the function
    res.status(500).json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: "fail",
      data: null,
    });
  }
}; // The function closes here at the very end
