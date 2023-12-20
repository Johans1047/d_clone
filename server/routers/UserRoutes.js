const express = require("express");
const router = express.Router(); 

const UserController = require("../controllers/UserController").UserController;
const userCont = new UserController();

router.get("/login", (req, res, next) => {
    try {
        const result = userCont.login();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

router.get("/signup", (req, res, next) => {
    try {
        const result = userCont.signup();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

// Middleware de manejo de errores
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Hubo un error en el servidor.");
});

module.exports = router;
