const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  names: {
    type: String,
    unique: true,
  },
  image: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const CAT = mongoose.model("category", categorySchema);

module.exports = CAT;
