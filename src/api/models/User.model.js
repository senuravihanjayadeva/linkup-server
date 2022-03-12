import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		userName: String,
		password: String,
		email: String,
	},
	{ timestamps: true }
);

export default User = mongoose.model("User", userSchema);
