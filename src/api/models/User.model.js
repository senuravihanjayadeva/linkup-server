import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		userName: String,
		password: String,
		email: String,
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
