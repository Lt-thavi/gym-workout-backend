const express = require("express");
const router = express.Router();
const controller = require("./exercise.controller");
const auth = require("../../middleware/auth");

router.use(auth);

router.post("/", controller.createExercise);
router.get("/", controller.getExercises);
router.get("/:id", controller.getExerciseById);
router.put("/:id", controller.updateExercise);
router.delete("/:id", controller.deleteExercise);

module.exports = router;
