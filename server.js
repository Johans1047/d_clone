const express = require("express");
const UserController = require("./server/controllers/UserController").UserController;
const app = express();
const PORT = 3306;
const HOST = "127.0.0.1";

userCont = new UserController();

app.get("/", (req, res) => {
    res.send("<h1>HELLO WORLD</h1>\n<br>");
});

app.get("/users/login", (req, res) => {
    res.send(userCont.login());
});

app.get("/users/signup", (req, res) => {
    res.send(userCont.signup());
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!\nClick here: http://${HOST}:${PORT}`);
});