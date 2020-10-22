const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const songSchema = new Schema({
	title: { type: String, default: false, required: true },
	artist: { type: String, default: false, required: true },
	time: { type: String, default: false, required: true },
	favorite: { type: Boolean, default: false },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
