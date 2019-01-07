const mongoose = require("mongoose");

const raidSchema = mongoose.Schema({
    raid_status: Boolean,
    monday: Boolean,
    sunday: Boolean
});

module.exports = mongoose.model("raidStatus", raidSchema);