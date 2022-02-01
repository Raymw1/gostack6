const nodemailer = require("nodemailer");
const mailConfig = require("../../config/mail");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
const exphbs = require("express-handlebars");

class MailService {
  send(message) {
    const transporter = nodemailer.createTransport(mailConfig);

    const viewPath = path.resolve(__dirname, "..", "views", "emails");

    if (process.env.NODE_ENV !== "test") {
      transport.use(
        "compile",
        hbs({
          viewEngine: exphbs.create({
            partialsDir: path.resolve(viewPath, "partials"),
            defaultLayout: "",
            layoutsDir: "",
          }),
          viewPath,
          extName: ".hbs",
        })
      );
    }

    return transporter.sendMail(message);
  }
}

module.exports = new MailService();
