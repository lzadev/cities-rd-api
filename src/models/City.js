const { model, Schema } = require("mongoose");

const CitySchema = Schema({
  province: String,
  capital: String,
  surface: String,
  population: String,
  density: String,
});

CitySchema.methods.toJSON = function () {
  const { _id, __v, ...city } = this.toObject();

  city.id = _id;

  return city;
};

module.exports = model("City", CitySchema);
