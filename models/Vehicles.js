const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
  plateNumber: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  registration: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  color: {
    type: String,
    enum: [
      "red", //non-national standard electric bicycles
      "black", // tricycle and special electric vehicle
      "grey", // off-campus personnel
      "yellow", // Teaching staffs
      "blue", // Electric bike pass for students
    ],
    // default: "red",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  penalty: [String]
});

module.exports = mongoose.model('vehicle', VehicleSchema);
