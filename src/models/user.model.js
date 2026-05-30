import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import envs from "../config/env.config.js";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

userSchema.pre("save", function () {
  // Check password is already hashed or not
  if (this.isModified("password")) return;

  //hash the password with 10salt round
  this.password = bcrypt.hashSync(this.password, 10);
});

//generate a JWT
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    // takes 3 thing id, key, expiry
    {
      id: this._id,
      name: this.name,
      email: this.name,
    },
    envs.JWT_SECRET_KEY,
    {
      expiresIn: "7d",
    },
  );
};

// make method to compare the password
userSchema.methods.comparePassword = function (password) {
  //compare password
  return bcrypt.compareSync(password, this.password);
};

// make user Model
const userModel = await new mongoose.model("users", userSchema);
export default userModel;
