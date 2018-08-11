const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  month: String,
  day: String,
  year: String,
  startTime: {
    hour: String,
    minute: String,
    amPm: String
  },
  endTime: {
    hour: String,
    minute: String,
    amPm: String
  }
});

const Appointment = mongoose.model('Appointment', appointSchema);

module.exports = Appointment;
