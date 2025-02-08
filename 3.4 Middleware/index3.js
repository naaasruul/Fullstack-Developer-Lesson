import express from "express";

const app = express();
const port = 3000;

var logger = (req, res, next) => {
  console.log(`REQUEST URL:: ${req.url}`);
  console.log(`REQUEST METHOD:: ${req.method}`);

  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
