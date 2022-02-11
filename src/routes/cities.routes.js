const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

//controller
const {
  getAllCities,
  getCityById,
} = require("../controllers/cities.controller");
const validateParams = require("../middlewares/validateParams");

router.get("/", getAllCities);
router.get(
  "/:id",
  [check("id", "You must provide a valid id").isMongoId(), validateParams],
  getCityById
);

module.exports = router;
