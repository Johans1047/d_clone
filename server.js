const express = require("express");
const app = express();
const PORT = 3306;
const HOST = "127.0.0.1";

const userRoutes = require("./server/routers/UserRoutes");

app.get("/", (req, res) => {
    res.send("<h1>HELLO WORLD</h1>\n<br>");
});

/**
 * Configures routing for user-related paths.
 *
 * @name app.use
 * @memberof app
 * @param {string} "/users" - The route prefix for user-related paths.
 * @param {Express.Router} userRoutes - The router handling user paths.
 * @returns {void}
 * @throws {Error} If there is an error while configuring the routes.
 */
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!\nClick here: http://${HOST}:${PORT}`);
});