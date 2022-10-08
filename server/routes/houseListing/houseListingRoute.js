const router = require("express").Router();
const { House } = require("../../models/houseModels");
const formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
const { getAllHouses } = require("../../controllers/controller");
const mongoose = require("mongoose");

//*********************mongoDB and Cloudinary config******************** */

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

router.get("/all", getAllHouses);

router.post("/house-listing", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (error, fields, files) => {
    const { price, category, type, location } = fields;
    console.log(`price; ${price}`);
    console.log(`category; ${category}`);
    console.log(`type; ${type}`);
    console.log(`location; ${location}`);
    const houseImage = files.house_image;
    console.log(`houseImage; ${houseImage.filepath}`);
    cloudinary.uploader.upload(
      houseImage.filepath,
      { folder: "/houseAgency/houses" },
      async (error, result) => {
        if (error) {
          return console.log(error);
        }
        const house_Image = result.url;
        const new_house = new House({
          price,
          location,
          category,
          type,
          house_Image,
        });
        const saveHouse = await new_house.save();
        return res.status(200).json(saveHouse);
      }
    );
  });
});

module.exports = router;
