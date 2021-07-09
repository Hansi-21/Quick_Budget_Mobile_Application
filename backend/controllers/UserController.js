const User = require("../model/user");

exports.saveUser = async (req, res) => {
  const userData = new User(req.body);
  await userData.save();
  res.send(true);
  console.log(req.body);
};

exports.getUser = async (req, res) => {
  const user = await User.find();
  res.send(user);
};

exports.getLoginDetails = async (req, res) => {
  // console.log(req.params.email);
  // console.log(req.params.password);
  let result = false;
  const user = await User.find({}, { email: 1, password: 1, _id: 0 });
  user.forEach((data) => {
    if (
      req.params.email == data.email &&
      req.params.password == data.password
    ) {  
      result = true;
    }
  });
  res.send(result);
};   
  
exports.getEmailExits = async (req, res) => {
  let result = false;
  const user = await User.find({}, { email: 1, _id: 0 });
  user.forEach((data) => {
    if (req.params.email == data.email) {
      result = true;
    }
  });
  res.send(result);
};
