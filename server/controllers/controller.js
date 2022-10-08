const { House } = require("../models/houseModels");
module.exports.getAllHouses = async (req, res) => {
  try {
    const products = await House.find();
    if (products.length < 0) {
      return res.status(404).json({
        msg: "No House Available",
      });
    }
    res.status(200).json({
      msg: "product list",
      house: products,
    });
  } catch (error) {
    console.log(error.message);
  }
};
