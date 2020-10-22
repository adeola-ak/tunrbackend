require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT;

const songRouter = require("./controllers/song");

app.get("/", (req, res) => {
	res.send("default route for tunr application");
});

app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/song", songRouter);

app.listen(PORT, () => {
	console.log(`listening in on port: ${PORT}`);
});
