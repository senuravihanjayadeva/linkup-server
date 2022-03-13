import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
	{
		company: String,
		position: String,
		description: String,
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobsSchema);
export default Jobs;
