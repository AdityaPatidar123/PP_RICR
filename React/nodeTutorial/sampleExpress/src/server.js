import express from "express";

const app = express();
app.use(express.json());
const middleware = (req, res) => {
  console.log(`${req.method} |${req.url} |${new Date().toISOString()}`);
  console.log("I am middleware");
};

app.get("/login", (req, res) => [res.send("login done")]);

app.post("/signup", (req, res) => {
  let { nm, unm, pass } = req.body;

  console.log(req.body);
  console.log("User Login Data");

  console.log(nm, unm, pass);
  res.status(200).json({ message: "User Created" });
});

app.listen(5000, () => {
  console.log("I am Server");
});
