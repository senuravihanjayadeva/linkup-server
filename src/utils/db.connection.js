import mongoose from "mongoose";
import logger from "./logger";

let database;

const connect = async () => {
	try {
		const databaseConnectionString = process.env.DB_CONNECTION_STRING;

		if (database) return;

		database = await mongoose.connect(databaseConnectionString);
		logger.info("✅ Database Synced");
	} catch (error) {
		logger.error(`Error Connecting to Database: ${error.message}`);
	}

	return database;
};

export default connect;
