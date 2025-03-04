import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../lib/auth.js";

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

    res.status(201).json({ message: "Welcome to the World of Footware !!" });
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
    if (email !== getUser.email) {
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

    generateToken(getUser._id, res);

    res.status(200).json({ message: `Welcome back ${getUser.fullName}` });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userUpdate = async (req, res, next) => {
  try {
    const { fullName, gender, age, mobile } = req.body;
    const userID = req.verfiedUser._id;

    const UpdatedUser = await User.findByIdAndUpdate(
      { _id: userID },
      {
        fullName,
        gender,
        age,
        mobile,
      },
      { new: true }
    );

    res.status(200).json({ message: "User Update Sucessfull", UpdatedUser });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userReset = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userID = req.verfiedUser._id;

    const checkpassword = await bcrypt.compare(
      oldPassword,
      req.verfiedUser.password
    );
    if (!checkpassword) {
      const er = new Error("Icorrect Password");
      er.statusCode = 401;
      next(er);
      return;
    }

    const encryptedPassward = await bcrypt.hash(newPassword, 10);

    const UpdatedUser = await User.findByIdAndUpdate(
      { _id: userID },
      {
        password: encryptedPassward,
      }
    );

    res.status(200).json({ message: "Password Change Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userDelete = async (req, res, next) => {
  try {
    const userID = req.verfiedUser._id;
    const confimDelete = await User.findByIdAndDelete({ _id: userID });

    res.status(200).json({ message: "User Delete Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userCheck = (req, res, next) => {
  try {
    const { fullName, email, gender, age, mobile } = req.verfiedUser;

    res.status(200).json({ fullName, email, gender, age, mobile });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userLogout = (req, res, next) => {
  try {
    res.cookie("jwt",)
    res.status(200).json({ message: "User Logout Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
