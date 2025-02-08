import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>hello small</h1>");
});

app.get("/contact-us", (req, res) => {
  res.send("<h1>Contact</h1>");
});

app.get("/about-us", (req, res) => {
  res.send("<h1>About Us</h1>");
});

app.listen(port, () => {
  console.log(`server running on prt ${port}!`);
});
