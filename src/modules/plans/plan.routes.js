const express = require("express");
const router = express.Router();
const controller = require("./plan.controller");
const auth = require("../../middleware/auth");
const { trainerOrAdmin } = require("../../middleware/roles");

// READ (authenticated users)
router.get("/", auth, controller.getPlans);
router.get("/:id", auth, controller.getPlanById);

// WRITE (trainer/admin)
router.post("/", auth, trainerOrAdmin, controller.createPlan);
router.put("/:id", auth, trainerOrAdmin, controller.updatePlan);
router.delete("/:id", auth, trainerOrAdmin, controller.deletePlan);

module.exports = router;

