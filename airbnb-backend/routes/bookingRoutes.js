const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.json({ message: "Booking saved successfully!", booking });
  } catch (error) {
    res.status(500).json({ message: "Error saving booking", error });
  }
});

module.exports = router;
