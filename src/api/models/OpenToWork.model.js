import mongoose, { Schema } from "mongoose";

const openToWorkSchema = new Schema(
	{
		applicantName: String,
		applyingPosition: String,
		description: String,
	},
	{ timestamps: true }
);

export default OpenToWork = mongoose.model("OpenToWork", openToWorkSchema);
