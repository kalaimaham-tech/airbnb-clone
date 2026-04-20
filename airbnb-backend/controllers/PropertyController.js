const Property = require("../models/Property");

// Add new property
exports.addProperty = async (req, res) => {
  try {
    const { title, description, location, pricePerNight, owner } = req.body;

    const newProperty = await Property.create({
      title,
      description,
      location,
      pricePerNight,
      owner
    });

    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: "Error adding property" });
  }
};

// Get all properties
exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("owner", "name email");
    res.json(properties);
  } catch {
    res.status(500).json({ message: "Error fetching properties" });
  }
};

// Get single property
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.json(property);
  } catch {
    res.status(500).json({ message: "Error fetching property" });
  }
};
