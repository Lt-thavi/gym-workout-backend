const express = require("express");
const router = express.Router();
const controller = require("./exercise.controller");
const auth = require("../../middleware/auth");
const { trainerOrAdmin } = require("../../middleware/roles");

// PUBLIC (authenticated)
router.get("/", auth, controller.getExercises);
router.get("/:id", auth, controller.getExerciseById);

// PROTECTED (trainer/admin)
router.post("/", auth, trainerOrAdmin, controller.createExercise);
router.put("/:id", auth, trainerOrAdmin, controller.updateExercise);
router.delete("/:id", auth, trainerOrAdmin, controller.deleteExercise);

module.exports = router;

