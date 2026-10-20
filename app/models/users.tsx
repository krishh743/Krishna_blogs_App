// import mongoose, { Schema, models } from "mongoose";

// const userSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// // Prevent model overwrite in dev
// const User = models.User || mongoose.model("User", userSchema);
// export default User;
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;