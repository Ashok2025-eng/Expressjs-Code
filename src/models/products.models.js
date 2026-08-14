import mongoose from "mongoose";

let products = [
  {
    _id: 1,
    productName: "shoe",
    price: 13000,
    size: 39,
  },
  {
    _id: 2,
    productName: "T-Shirt",
    price: 2000,
    size: "xl",
  },
];

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true },
);

const PRODUCT = mongoose.model("PRODUCT", productSchema);
export default PRODUCT;
