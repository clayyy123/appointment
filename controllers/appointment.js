const Appointment = require('../models/appointment.js');

module.exports = {
  create: (req, res) => {
    Appointment.create(req.body, (err, newApp) => {
      res.json({ message: 'app created', newApp });
    });
  }
};
