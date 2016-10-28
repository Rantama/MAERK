'use strict';

import mongoose from 'mongoose';

var EmployeeSchema = new mongoose.Schema ({
  first_name: {
    type: String,
    require: true
  },
  last_name: {
    type: String,
    require: true
  },
  client: {
    type: String,
    require: true
  },
  skill: {
    type: String,
    require: true
  },
  recruiter: {
    type: String,
    require: true
  },
  placement_type: {
    type: String,
    require: true
  },
  salary: {
    type: Number,
    require: true
  },
  insurance: {
    type: Number,
    require: true
  },
  relocation: {
    type: Number,
    require: true
  },
  immigration: {
    type: Number,
    require: true
  },
  pay_vacation_cost: {
    type: Number,
    require: true
  },
  ksquare_hourly_cost: {
    type: Number,
    require: true
  },
  target_hourly_bill: {
    type: Number,
  require: true
  },
  client_bill_pay: {
    type: Number,
    require: true
  },
  activate: {
    type: Boolean,
    require: true
  }
});

export default mongoose.model('employee', EmployeeSchema);
