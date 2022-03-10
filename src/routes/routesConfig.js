const userRouters = require('./users')
const productRoutes = require('./products')
const comprasRoutes = require('./compras')

const routes = (app) => {
    app.use("/api", userRouters)
    app.use("/api", productRoutes)
    app.use("/api", comprasRoutes)
};



module.exports = routes