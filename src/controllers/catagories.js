//* get all

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    description: {
      type: String,
      maxLength: 50,
    },
  },
  { timestamps: true },
);

const Category = mongoose.model("category", categorySchema);

export const getAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.find();
    // const { name, limit, page, sort } = req.query;
    console.log(req.query);

    res.status(200).json({
      message: "all catagories fetched",
      success: true,
      status: "success",
      data: allCategory,
    });
  } catch (error) {
    res.json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: "error",
      data: null,
    });
  }
};

//* get by id
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    //   res.send(`<h1>category by ${id} fetched</h1>`);

    const category = await Category.findById(id);

    if (!category) {
      res.status(404).json({
        message: `user:${id} not found`,
        status: "fail",
        success: false,
        data: null,
      });
      return;
    }
    res.status(200).json({
      message: `category:${id} fetched`,
      status: "success",
      success: true,
      data: category,
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
//* create
export const createCategory = async (req, res) => {
  try {
    //   res.send(`<h1>category created</h1>`);

    // const category = { ...req.body, _id: categories.length + 1 };
    // categories.push(category);
    const { name, description } = req.body;
    const category = await Category.create({ name, description });

    res.status(201).json({
      data: category,
      message: "Category created",
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

//* update
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    //   res.send(`<h1>category:${id} updated</h1>`);
    // console.log(req.body);
    const updateData = req.body;
    // const updatedCategory = {
    //   _id: id,
    //   ...req.body,
    // };

    const updatedCategory = await Category.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedCategory) {
      res.status(404).json({
        // Added return and 404 status
        message: `Category ${id} not found`,
        status: "fail",
        success: false,
        data: null,
      });
      return;
    }
    res.status(201).json({
      data: updatedCategory,
      message: `Category ${id} updated`,
      status: "success",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: "fail",
      data: null,
    });
  }
};

//* delete
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCategory = await Category.findByIdAndDelete(id);

    //   res.send(`<h1>category:${id} deleted</h1>`);

    if (!deleteCategory) {
      res.json({
        message: `Category ${id} not found`,
        success: false,
        status: "fail",
        data: null,
      });
      return;
    }
    res.status(200).json({
      message: `category ${id} deleted`,
      success: true,
      status: "success",
      data: deleteCategory,
    });
  } catch (error) {
    res.json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: "fail",
      data: null,
    });
  }
};
