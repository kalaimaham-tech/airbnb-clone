const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  propertyId: Number,
  name: String,
  email: String,
  guests: Number,
  date: String,
  price: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);
