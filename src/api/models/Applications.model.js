import mongoose, { Schema } from "mongoose";

const applicationsSchema = new Schema(
	{
		applicantName: String,
		nic: String,
		contactNumber: String,
		university: String,
		skills: String,
		languages: String,
		linkedIn: String,
		github: String,
		status: String,
	},
	{ timestamps: true }
);

const Application = mongoose.model("Application", applicationsSchema);

export default Application;
