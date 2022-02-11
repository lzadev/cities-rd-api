const { response } = require("express");
const { request } = require("express");

const routeNotFound = (req = request, res = response) => {
  res
    .status(404)
    .json({ message: `The server does not recognize the route ${req.url}` });
};

module.exports = routeNotFound;
