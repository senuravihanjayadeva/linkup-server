import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
	{
		company: String,
		position: String,
		description: String,
	},
	{ timestamps: true }
);

export default Jobs = mongoose.model("Jobs", jobsSchema);
