const { response } = require("express");

const internalError = (res = response) => {
  return res.status(500).json({
    message:
      "In this moment the server can not process your request try it again or try later.",
  });
};

const notFound = (res = response, idResource) => {
  return res.status(404).json({
    message: `Not resource found with id ${idResource}`,
  });
};

module.exports = { internalError, notFound };
