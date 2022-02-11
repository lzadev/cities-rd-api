const { response } = require("express");
const { request } = require("express");
const City = require("../models/City");
const { internalError, notFound } = require("../helpers/errors");

const getAllCities = async (req = request, res = response) => {
  try {
    const { limit = 10, skip = 0 } = req.query;

    const [total, cities] = await Promise.all([
      City.countDocuments(),
      City.find({}).skip(Number(skip)).limit(Number(limit)),
    ]);

    res
      .status(200)
      .json({ limit: limit > 32 ? 32 : limit, total, data: cities });
  } catch (error) {
    console.log("Error getting all cities", error);
    internalError(res);
  }
};

const getCityById = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const city = await City.findById({ _id: id });

    if (!city) {
      notFound(res, id);
    }

    return res.status(200).json({ data: city });
  } catch (error) {
    console.log("Error getting all cities", error);
    internalError(res);
  }
};

module.exports = {
  getAllCities,
  getCityById,
};
