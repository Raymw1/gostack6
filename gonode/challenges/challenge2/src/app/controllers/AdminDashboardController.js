const { User, Appointment } = require("../models");
const moment = require("moment");

class AdminDashboardController {
  async index(req, res) {
    let appointments = await Appointment.findAll({
      where: { provider_id: req.session.user.id },
    });
    const appointmentsPromise = appointments.map(async (appointment) => {
      const date = moment(appointment.date).format("MM/DD/YYYY HH:mm");
      const user = await User.findByPk(appointment.user_id);
      user.password_hash = "";
      return {
        id: appointment.id,
        date,
        user,
      };
    });
    appointments = await Promise.all(appointmentsPromise);
    return res.render("admin/dashboard", { appointments });
  }
}

module.exports = new AdminDashboardController();
