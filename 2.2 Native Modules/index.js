const fs = require("fs");

const content = "Some content!";

fs.writeFile("message.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
    console.log("data has been saved!");
  }
});



fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});