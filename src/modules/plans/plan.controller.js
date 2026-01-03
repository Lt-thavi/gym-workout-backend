const Plan = require("./plan.model");

// CREATE
exports.createPlan = async (req, res) => {
  try {
    const plan = await Plan.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL
exports.getPlans = async (req, res) => {
  const plans = await Plan.find().populate("workouts");
  res.json(plans);
};

// READ ONE
exports.getPlanById = async (req, res) => {
  const plan = await Plan.findById(req.params.id).populate("workouts");
  if (!plan) {
    return res.status(404).json({ message: "Plan not found" });
  }
  res.json(plan);
};

// UPDATE
exports.updatePlan = async (req, res) => {
  const plan = await Plan.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(plan);
};

// DELETE
exports.deletePlan = async (req, res) => {
  await Plan.findByIdAndDelete(req.params.id);
  res.json({ message: "Plan deleted" });
};
