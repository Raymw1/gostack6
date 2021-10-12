const { Appointment } = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");

class AvailableController {
  async index(req, res) {
    try {
      const date = moment(parseInt(req.query.date));
      const appointments = await Appointment.findAll({
        where: {
          provider_id: req.params.provider,
          date: {
            [Op.between]: [
              date.startOf("day").format(),
              date.endOf("day").format(),
            ],
          },
        },
      });
      const schedules = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
      ];
      const available = schedules.map((time) => {
        const [hour, minute] = time.split(":");
        const value = date.hour(hour).minute(minute).second(0);
        return {
          time,
          value: value.format(),
          available:
            value.isAfter(moment()) &&
            !appointments.find(
              (appointment) => moment(appointment.date).format("HH:mm") === time
            ),
        };
      });
      return res.render("available/index", { available });
    } catch (error) {
      console.error(error);
      return res.redirect("/");
    }
  }
}

module.exports = new AvailableController();
