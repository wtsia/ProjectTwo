const mongoose = require("../db/connection");

const memeSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String,
    topic: String
});

const memeModel = mongoose.model("memeModel", memeSchema);

module.exports = memeModel;