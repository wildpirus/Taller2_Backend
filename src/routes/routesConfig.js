const userRouters = require("./users");
const productRoutes = require("./products");
const comprasRoutes = require("./compras");
const missionsRoutes = require("./missions");
const missionsObjetivesRoutes = require("./missionsObjetives");
const image2dRoutes = require("./image_2d");

const routes = (app) => {
  app.use("/api", userRouters);
  app.use("/api", productRoutes);
  app.use("/api", comprasRoutes);
  app.use("/api", missionsRoutes);
  app.use("/api", missionsObjetivesRoutes);
  app.use("/api", image2dRoutes);
};

module.exports = routes;
