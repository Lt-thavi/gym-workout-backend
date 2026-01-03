const Progress = require("./progress.model");

// CREATE
exports.createProgress = async (req, res) => {
  try {
    const progress = await Progress.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json(progress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL (user-specific)
exports.getProgress = async (req, res) => {
  const progress = await Progress.find({ user: req.user.id })
    .populate("workout");
  res.json(progress);
};

// READ ONE
exports.getProgressById = async (req, res) => {
  const progress = await Progress.findById(req.params.id);
  if (!progress) {
    return res.status(404).json({ message: "Progress not found" });
  }
  res.json(progress);
};

// UPDATE
exports.updateProgress = async (req, res) => {
  const progress = await Progress.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(progress);
};

// DELETE
exports.deleteProgress = async (req, res) => {
  await Progress.findByIdAndDelete(req.params.id);
  res.json({ message: "Progress deleted" });
};
