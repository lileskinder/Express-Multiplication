const express = require("express");
const controller = require("../controllers/myConroller")
const router = express.Router();

router.route("/mult/:num1")
    .get(controller.multiplication);

module.exports = router;