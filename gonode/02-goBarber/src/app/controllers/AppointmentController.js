const { User, Appointment } = require("../models");

class AppointmentController {
  async create(req, res) {
    try {
      const provider = await User.findByPk(req.params.provider);
      if (!provider) return res.redirect("/");
      return res.render("appointments/create", { provider });
    } catch (error) {
      console.error(error);
      return res.redirect("/");
    }
  }

  async store(req, res) {
    try {
      const { id } = req.session.user;
      const provider = await User.findByPk(req.params.provider);
      if (!provider) return res.redirect("/");
      const { date } = req.body;
      if (!date) return res.redirect("/");
      await Appointment.create({ user_id: id, provider_id: id, date });
      return res.redirect("/app/dashboard");
    } catch (error) {
      console.error(error);
      return res.redirect("/");
    }
  }
}

module.exports = new AppointmentController();
