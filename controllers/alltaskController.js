const db = require("../config/mongoose");
const Dashboard = require("../models/dashboard");
const User = require("../models/register");

module.exports.alltask = async function (req, res) {
  // const email = req.body.email;
  await Dashboard.find({})
    .then(function (data) {
      console.log("data : ", data);

      User.findOne({ email: "abc@gmail.com" }).then(function (user) {
        // console.log(`**********user`, user.name);
        return res.render("alltask", {
          title: "Dashboard",
          name: user.name,
          dashboard: data,
        });
      });
    })
    .catch(function (err) {
      console.log("Error", err);
      return;
    });
};
