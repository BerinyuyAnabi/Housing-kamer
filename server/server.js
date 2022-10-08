const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Mongo_URI = process.env.Mongo_URI;

//*********************mongoDB connection******************** */
mongoose.connect(
  Mongo_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("connected successfully to the database");
  }
);

//**********************middleware***********************/
app.use(cors());
//**********************route constant*******************/
const houseListingRoute = require("./routes/houseListing/houseListingRoute");
//**********************route*******************/
app.use("/api", houseListingRoute);
//**********************server entry point*******************/
const port = process.env.PORT || 8000;
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
