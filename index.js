const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGODB_URI =
  "mongodb+srv://alanjacob:Alanandg123@cluster0.7opvu.mongodb.net/User";

const app = express();

const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    console.log("Connnected");
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
