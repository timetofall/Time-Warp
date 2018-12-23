const mongoose = require("mongoose");

const raidSchema = mongoose.Schema({
    raid_status: Boolean
});

module.exports = mongoose.model("raidStatus", raidSchema);