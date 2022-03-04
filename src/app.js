import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";

const app = express();
const PORT = process.env.PORT || "9000";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (_req, res, next) => {
	res.send("<h1>LinkUp Backend API</h1>");
	next();
});

app.listen(PORT, () => {
	logger.info(`🚀 Server is up and running on PORT ${PORT}`);
});