const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

const port = 3333;


/**
 *  DataBase Setup
 **/

mongoose.connect("mongodb://localhost:27017/upload", {
  useNewUrlParser: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // requisiçoes no padrão url encoded
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(port, () => console.log(`Aplicação foi iniciada -- http://localhost:${port}`));