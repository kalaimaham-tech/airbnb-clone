const Booking = require("../models/Booking");

// Create new booking
exports.createBooking = async (req, res) => {
  try {
    const { property, checkIn, checkOut, totalPrice, guests } = req.body;

    const booking = await Booking.create({
      user: req.user.id,
      property,
      checkIn,
      checkOut,
      totalPrice,
      guests,
    });

    res.json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all bookings for logged-in user
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("property");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
