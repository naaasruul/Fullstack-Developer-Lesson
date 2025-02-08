import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

var bandGenerator = (req, res, next) => {
  var street = req.body.street;
  var pet = req.body.pet;

  bandName = street + pet;

  next();
};
app.use(bandGenerator);

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log("POST::", req.body.street);

  res.send(`<h1>Your Band Name is: </h1> <p>${bandName}</p>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
