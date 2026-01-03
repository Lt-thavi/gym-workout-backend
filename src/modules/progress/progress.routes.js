const express = require("express");
const router = express.Router();
const controller = require("./progress.controller");
const auth = require("../../middleware/auth");

router.use(auth);

router.post("/", controller.createProgress);
router.get("/", controller.getProgress);
router.get("/:id", controller.getProgressById);
router.put("/:id", controller.updateProgress);
router.delete("/:id", controller.deleteProgress);

module.exports = router;
