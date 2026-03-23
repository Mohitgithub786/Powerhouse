import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { bookingType, plan, date, time, note } = req.body;

    if (!bookingType || !date || !time) {
      return res.status(400).json({ message: "bookingType, date and time are required" });
    }

    const booking = await Booking.create({
      user: req.user._id,
      bookingType,
      plan,
      date,
      time,
      note
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = status || booking.status;
    await booking.save();

    res.status(200).json({
      message: "Booking status updated",
      booking
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
