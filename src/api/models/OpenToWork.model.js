import mongoose, { Schema } from "mongoose";

const openToWorkSchema = new Schema(
	{
		applicantName: String,
		applyingPosition: String,
		description: String,
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const OpenToWork = mongoose.model("OpenToWork", openToWorkSchema);

export default OpenToWork;
