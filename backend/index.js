const express = require("express");

const mongo = require("mongoose");

const userController = require("./controllers/UserController");

mongo
  .connect("mongodb://localhost:27017/QuickBudget")
  .then(() => {
    const app = express();
    app.use(express.json());
    app.listen(3000);
    console.log("Success");

    app.post("/user", userController.saveUser);
    app.get("/user", userController.getUser);
  })
  .catch((error) => {
    console.log(error);
  });
