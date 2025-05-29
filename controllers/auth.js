const users = require("../models/users");
exports.postLogin = (req, res, next) => {
  console.log(req.body);
  users.find({ name: req.body.usrename, password: req.body.password }).then((user) => {
      if (user.length != 0) {
        req.session.isAuthenticated = true;
        return res.redirect("/");
      } else
        return res.render("auth/login", {
          PageTitle: "Login",
          isAuthenticated: req.session.isAuthenticated,
          invalid: true,
        });
    });
  // users
  //   .findOne({ name: req.body.usrename, password: req.body.password })
  //   .then((user) => {
  //     if (user) {
  //       req.session.isAuthenticated = true;
  //       return res.redirect("/");
  //     } else {
  //       return res.render("auth/login", {
  //         PageTitle: "Login",
  //         isAuthenticated: req.session.isAuthenticated,
  //         invalid: true,
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     console.error("Error during login:", err);
  //     return res.status(500).render("error", {
  //       PageTitle: "Error",
  //       isAuthenticated: req.session.isAuthenticated,
  //       error: "An error occurred during login",
  //     });
  //   });
};
exports.getLogin = (req, res, next) => {
  return res.render("auth/login", {
    PageTitle: "Login",
    isAuthenticated: req.session.isAuthenticated,
    invalid: false,
  });
};
exports.getLogout = (req, res, next) => {
  req.session.destroy();
  return res.redirect("/");
};
