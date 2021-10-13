const Mail = require("../services/Mail");

class PurchaseMail {
  get key() {
    return "PurchaseMail";
  }

  async handle(job, done) {
    const { ad, user, content } = job.data;
    await Mail.sendMail({
      from: `"Rayan Wilbert" <raymw@raymw.com.br>`,
      to: ad.author.email,
      subject: `Ordering: ${ad.title}`,
      template: "purchase",
      context: { user, content, ad: ad },
    });
    return done();
  }
}

module.exports = new PurchaseMail();
