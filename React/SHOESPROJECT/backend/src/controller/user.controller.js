import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const userSignup = async (req, res, next) => {
  try {
    const { fullName, email, password, gender, age, mobile } = req.body;

    if (!fullName || !email || !password || !gender || !age || !mobile) {
      const er = new Error("All Feilds Required !!");
      er.statusCode = 400;
      next(er);
      return;
    }

    if (password.length < 8 || password.length > 15) {
      const er = new Error("Paswword needs to be in range 8-15 characters !!");
      er.statusCode = 400;
      next(er);
      return;
    }

    const encryptedPassward = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: encryptedPassward,
      gender,
      age,
      mobile,
    });

    res.status(201).json({ message: "User Signup Sucessfull", newUser });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const er = new Error("All Feilds Required !!");
      er.statusCode = 400;
      next(er);
      return;
    }

    if (password.length < 8 || password.length > 15) {
      const er = new Error("Paswword needs to be in range 8-15 characters !!");
      er.statusCode = 400;
      next(er);
      return;
    }

    const getUser = await User.findOne({ email });
    if (email !== getUser) {
      const er = new Error("User not Found !!");
      er.statusCode = 404;
      next(er);
      return;
    }

    const checkpassword = await bcrypt.compare(password, getUser.password);
    if (!checkpassword) {
      const er = new Error("Unauthorized");
      er.statusCode = 401;
      next(er);
      return;
    }

    res.status(200).json({ message: `Welcome back ${getUser.fullName}` });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userLogout = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Logout Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userUpdate = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Update Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userReset = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Reset Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userDelete = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Delete Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userCheck = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Check Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
