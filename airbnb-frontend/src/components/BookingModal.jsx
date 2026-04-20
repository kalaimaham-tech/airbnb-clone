import { useState } from "react";
import api from "../api/axios";

export default function BookingModal({ price, propertyId, onClose, onConfirm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [total, setTotal] = useState(0);

  const calculateTotal = (start, end) => {
    if (!start || !end) return 0;
    const startDate = new Date(start);
    const endDate = new Date(end);

    const diff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    return diff > 0 ? diff * price : 0;
  };

  // When user selects dates → update total price
  const handleDateChange = (field, value) => {
    if (field === "from") setFromDate(value);
    else setToDate(value);

    const newTotal = calculateTotal(
      field === "from" ? value : fromDate,
      field === "to" ? value : toDate
    );

    setTotal(newTotal);
  };

  const handleBooking = async () => {
    const bookingDetails = {
      name,
      email,
      guests,
      fromDate,
      toDate,
      total,
      propertyId,
    };

    onConfirm(bookingDetails);

    try {
      await api.post("/bookings/create", bookingDetails);
      alert("Booking Saved in MongoDB!");
    } catch (error) {
      alert("Error saving booking!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 w-96 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Book Property</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Guests"
          className="w-full p-2 border rounded mb-3"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <p className="font-semibold mb-2">₹{price} / night</p>

        <label className="text-sm font-semibold">From Date</label>
        <input
          type="date"
          className="w-full p-2 border rounded mb-3"
          value={fromDate}
          onChange={(e) => handleDateChange("from", e.target.value)}
        />

        <label className="text-sm font-semibold">To Date</label>
        <input
          type="date"
          className="w-full p-2 border rounded mb-3"
          value={toDate}
          onChange={(e) => handleDateChange("to", e.target.value)}
        />

        <p className="text-xl font-bold mt-2">
          Total Amount: ₹{total}
        </p>

        <button
          className="w-full bg-red-500 text-white p-3 rounded-lg mt-4"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>

        <button
          className="w-full bg-gray-300 text-black p-2 rounded-lg mt-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
