const { User } = require("../models");

class SessionController {
  async create(req, res) {
    return res.render("auth/signin");
  }

  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("User not found!");
      return res.redirect("/");
    }
    if (!(await user.checkPassword(password))) {
      console.log("Invalid Password!");
      return res.redirect("/");
    }
    req.session.user = user;
    if (user.provider) return res.redirect("/app/admin/dashboard");
    return res.redirect("/app/dashboard");
  }

  destroy(req, res) {
    req.session.destroy(() => {
      res.clearCookie("root");
      return res.redirect("/");
    });
  }
}

module.exports = new SessionController();
