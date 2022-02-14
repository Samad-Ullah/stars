const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

exports.DbConnection = async () => {
  await mongoose.connect(
    "mongodb+srv://samad:leosamad1@cluster0.t4xcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Database Connected");
    }
  );
};