const data = require("./data");
const City = require("../models/City");

const populate = async () => {
  try {
    await City.deleteMany({});
    await City.insertMany(data);
  } catch (error) {
    console.log("Error seeding the db", error);
  }
};

module.exports = populate;
