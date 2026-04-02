const express = require("express");
const router = express.Router();
const controller = require("../controllers/systemController");

router.get("/", controller.getSystems);
router.post("/", controller.addSystem);

module.exports = router;