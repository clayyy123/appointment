const express = require('express');
const appointmentRouter = new express.router();
const appCtrl = require('..controllers/appointment.js');

appointmentRouter.route('/').post(appCtrl.create);
