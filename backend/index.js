const express = require("express");

const mongo = require("mongoose");

const cors = require("cors");

const userController = require("./controllers/UserController");

mongo
  .connect("mongodb://localhost:27017/QuickBudget")
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.listen(3000);
    console.log("Success");

    app.post("/user", userController.saveUser);
    app.get("/user", userController.getUser);
    app.get("/user/:email/:password", userController.getLoginDetails);
    app.get("/user/:email",userController.getEmailExits);
  })
  .catch((error) => {
    console.log(error);
  });  
