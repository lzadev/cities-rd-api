const express = require("express");
const connect = require("../database/connection");
const routeNotFound = require("../middlewares/routeNotFound");

//routers
const citiesRouter = require("../routes/cities.routes");

class Server {
  constructor() {
    this.app = express();
    this.routes();
    this.middlewares();
  }

  routes() {
    this.app.use("/api/cities", citiesRouter);
  }

  middlewares() {
    this.app.use(routeNotFound);
  }

  async start() {
    try {
      await connect(process.env.MONGO_URI);
      const PORT = process.env.PORT || 3000;
      this.app.listen(PORT, async () => {
        console.log(`App listening on port ${PORT}`);
      });
    } catch (error) {
      console.log("Error truing to connect to db", error);
    }
  }
}

module.exports = Server;
