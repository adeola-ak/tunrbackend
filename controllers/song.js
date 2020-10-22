const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const Song = require("../models/song");
const seedData = require("../db/seed.json");

router.get("/seed", (req, res) => {
	Song.deleteMany({}).then(() => {
		Song.insertMany(seedData).then((seedData) => {
			res.json(seedData);
		});
	});
});

router.get("/", async (req, res) => {
	res.json(await Song.find({}));
});

router.post("/", async (req, res) => {
	Song.create(req.body).then((song) => {
		res.json(song);
	});
});

router.put("/:id", async (req, res) => {
	res.json(await Song.findByIdAndUpdate(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
	res.json(await Song.findByIdAndRemove(req.params.id));
});

module.exports = router;
