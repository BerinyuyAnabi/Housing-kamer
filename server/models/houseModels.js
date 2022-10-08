const mongoose = require("mongoose");
const HouseSchema = mongoose.Schema({
  price: { type: Number, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  house_Image: { type: String, required: true },
});

const House = mongoose.model("House", HouseSchema);

module.exports = { House };
