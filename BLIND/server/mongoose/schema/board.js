const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const Board = new Schema({
  title: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Board;
