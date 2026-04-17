const express = require("express");
const router = express.Router();
const { getProblem } = require("../controllers/problemController");

router.get("/get", getProblem);

module.exports = router;