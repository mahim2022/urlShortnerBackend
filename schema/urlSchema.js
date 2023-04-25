const { Schema, model } = require("mongoose");

const urlSchema = new Schema({
  slug: { type: String, required: true, index: true, unique: true },
  url: String,
});
const urls = model("Urls", urlSchema);
module.exports = urls;
