const express = require("express");
const router = express.Router();
const controller = require("./plan.controller");
const auth = require("../../middleware/auth");

router.use(auth);

router.post("/", controller.createPlan);
router.get("/", controller.getPlans);
router.get("/:id", controller.getPlanById);
router.put("/:id", controller.updatePlan);
router.delete("/:id", controller.deletePlan);

module.exports = router;
