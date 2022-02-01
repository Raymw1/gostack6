const MailService = require("../services/MailService");

class OrderMail {
  get key() {
    return "PurchaseMail";
  }

  async handle(job, done) {
    const { orderId, username, email } = job.data;
    await MailService.send({
      from: '"Pizzaria Don Juan" <pizzaria@donjuan.com',
      to: email,
      subject: `Success on order solicitation: #${orderId}`,
      template: "orders",
      context: { username },
    });
    return done();
  }
}

module.exports = new OrderMail();
