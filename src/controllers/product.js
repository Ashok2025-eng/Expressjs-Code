//* get all

import mongoose from "mongoose";
import PRODUCT from "../models/products.models.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProduct = await PRODUCT.find();
    const { name, limit, page, sort } = req.query;
    console.log(req.query);

    res.status(200).json({
      message: "all product fetched",
      success: true,
      status: "success",
      data: allProduct,
    });
  } catch (error) {
    res.json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: error?.status ?? "error",
      data: null,
    });
  }
};

//* get by id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await PRODUCT.findById(id);

    // find product by id from db
    // res.send(`<h1>Products by ${id} fetched</h1>`);

    // const product = products.find((product) => product._id === Number(id));
    if (!product) {
      res.status(404).json({
        message: `Product:${id} not found`,
        status: "success",
        success: true,
        data: null,
      });
      return;
    }
    res.status(200).json({
      message: `Products:${id} fetched`,
      status: "success",
      success: true,
      data: product,
    });
  } catch (error) {
    res.json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: error?.status ?? "error",
      data: null,
    });
  }
};

//* create
export const createProduct = async (req, res) => {
  try {
    const { productName, price, size } = req.body;
    const product = await PRODUCT.create({ productName, price, size });
    // insert new product on db
    // res.send(`<h1>Products created</h1>`);
    console.log(req.body);
    // const product = { ...req.body, _id: products.length + 1 };
    // products.push(product);

    res.status(201).json({
      data: product,
      message: "product created",
      status: "success",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: error?.status ?? "error",
      data: null,
    });
  }
};

//* update
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // update product
    // res.send(`<h1>Products:${id} updated</h1>`);
    const updateData = req.body;
    // const updatedProduct = {
    //   _id: id,
    //   ...req.body,
    // };

    const updatedProduct = await PRODUCT.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updateProduct) {
      res.status(404).json({
        message: `Product:${id} not found`,
        status: "fail",
        success: false,
        data: null,
      });
    }
    res.status(201).json({
      data: updatedProduct,
      message: `Product ${id} updated`,
      status: "success",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error?.message ?? "Something went wrong",
      success: false,
      status: error?.status ?? "error",
      data: null,
    });
  }
};

//* delete
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    // delete product from db
    // res.send(`<h1>Products:${id} deleted</h1>`);

    const deleteProduct = await PRODUCT.findByIdAndDelete(id);

    if (!deleteProduct) {
      res.status(404).json({
        message: `Product ${id} not found`,
        success: false,
        status: "fail",
        data: null,
      });
      return;
    }

    res.status(200).json({
      message: "`Product ${id}deleted`",
      success: true,
      status: "success",
      data: null,
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
