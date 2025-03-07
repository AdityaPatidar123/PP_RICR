import jwt from "jsonwebtoken";

const generateToken = (userID, res) => {
  const token = jwt.sign({ key: userID }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    sameSite: "strict",
    secure: false, //make this true before deployment
  });
};

export default generateToken;
