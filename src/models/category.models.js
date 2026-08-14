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
export default Category;
