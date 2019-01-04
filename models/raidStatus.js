const mongoose = require("mongoose");

const raidSchema = mongoose.Schema({
    raid_status: Boolean,
    monday: Boolean
});

module.exports = mongoose.model("raidStatus", raidSchema);