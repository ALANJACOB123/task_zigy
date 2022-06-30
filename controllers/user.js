const User = require("../models/user");

exports.addUser = (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const phoneNo = req.body.phoneNo;
  console.log(email, name, phoneNo);
  const user = new User({
    email: email,
    Name: name,
    PhoneNo: phoneNo
  });
  user.save()
    .then(result => {
      res.send('User Created');
    })
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then(user => {
      if (!user) {
        return next(new Error('User not found.'));
      }
      return User.deleteOne({ _id: id });
    })
    .then(() => {
      res.send('DESTROYED PRODUCT');
    })
};