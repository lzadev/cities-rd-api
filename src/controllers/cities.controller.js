const { response } = require("express");
const { request } = require("express");

const getAllCities = (req = request, res = response) => {
  res.send("get all cities");
};

const getCityById = (req = request, res = response) => {
  res.send("get city by id");
};

module.exports = {
    getAllCities,getCityById
}
