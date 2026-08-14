import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: [true, "full_name is required"],
      minLength: 3,
      trim: true,
    },
    email: {
      type: String,
      required:[true,"email is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required:[true,"password is required"],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"], // Fixed: Changed "emum" typo to "enum"
      default: "USER",
    },
  },
  { timestamps: true },
);

// Creating collection/model
const User = mongoose.model("user", userSchema);
export default User;
