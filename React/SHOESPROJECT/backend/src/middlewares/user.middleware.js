import jwt from "jsonwebtoken";
import user from "../models/user.model.js";

export const userLog = (req, res, next) => {
  console.log(
    `Test Request is executed for user ${req.url} with ${
      req.method
    } Method at ${new Date().toISOString()}`
  );

  next();
};

export const confirmUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      const er = new Error("Session Expired ! Please Login Again");
      er.statusCode = 401;
      next(er);
      return;
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const verfiedUser = await user.findById(decode.key); //.select("-password"); ,for remove password

    req.verfiedUser = verfiedUser;
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
