const { User } = require("../models");
const Mail = require("../services/MailService");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).json({ error: { message: "User not found" } });
    if (!(await user.checkPassword(password)))
      return res.status(401).json({ error: { message: "Incorrect password" } });
    await Mail.send({
      from: "Rayan Wilbert <rayan@rocketseat.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Recent login of your account",
      text: "Heyy Dev, we've registered a new access into your account!",
    });
    return res.json({
      token: await user.generateToken(),
    });
  }
}

module.exports = new SessionController();
