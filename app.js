const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { hello: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`App listening on port# [${PORT}]`);
});
