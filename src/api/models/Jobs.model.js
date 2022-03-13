import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
	{
		company: String,
		position: String,
		description: String,
	},
	{ timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobsSchema);
export default Jobs;
