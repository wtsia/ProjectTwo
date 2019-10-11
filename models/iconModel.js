const mongoose = require("../db/connection");

const iconSchema = new mongoose.Schema({
    url: String
});

const iconModel = mongoose.model("iconModel", iconSchema);

module.exports = iconModel;