const express = require("express");
const router = express.Router();

//controller
const {
  getAllCities,
  getCityById,
} = require("../controllers/cities.controller");

router.get("/", getAllCities);
router.get("/:id", getCityById);

module.exports = router;
