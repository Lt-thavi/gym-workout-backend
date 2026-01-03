const Schedule = require("./schedule.model");

// CREATE
exports.createSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json(schedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL (user-specific)
exports.getSchedules = async (req, res) => {
  const schedules = await Schedule.find({ user: req.user.id })
    .populate("workout");
  res.json(schedules);
};

// READ ONE
exports.getScheduleById = async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  if (!schedule) {
    return res.status(404).json({ message: "Schedule not found" });
  }
  res.json(schedule);
};

// UPDATE
exports.updateSchedule = async (req, res) => {
  const schedule = await Schedule.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(schedule);
};

// DELETE
exports.deleteSchedule = async (req, res) => {
  await Schedule.findByIdAndDelete(req.params.id);
  res.json({ message: "Schedule deleted" });
};
