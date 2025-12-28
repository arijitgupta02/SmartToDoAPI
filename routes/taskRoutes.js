const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// Create Task
router.post("/", auth, async (req, res) => {
    try {
        const task = new Task({ userId: req.user.id, ...req.body });
        await task.save();
        res.json({ msg: "Task created", task });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get All Tasks of Logged User
router.get("/", auth, async (req, res) => {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
});

// Update Task
router.put("/:id", auth, async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    );
    res.json({ msg: "Updated", task });
});

// Delete Task
router.delete("/:id", auth, async (req, res) => {
    await Task.deleteOne({ _id: req.params.id, userId: req.user.id });
    res.json({ msg: "Task deleted" });
});

module.exports = router;
