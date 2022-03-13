import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
	{
		userName: { type: String, required: false },
		password: { type: String, required: false },
		email: { type: String, required: false },
		authToken: { type: String, required: false },
	},
	{ timestamps: true }
);

// Hash the user password
userSchema.pre("save", async function (next) {
	const user = this;
	const password = user.password;

	if (!user.isModified("password")) {
		return next();
	}

	// Number of rounds hash function will execute
	const salt = await bcrypt.genSalt(10);

	const hash = await bcrypt.hashSync(password, salt);
	user.password = hash;
	return next();
});

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const secret = process.env.JWT_SECRET;

	const authToken = jwt.sign({ _id: user._id }, secret);
	user.authToken = authToken;
	await user.save();
	return authToken;
};

userSchema.statics.findByUsernamePassword = async (userName, password) => {
	const user = await UserModel.findOne({ userName: userName });

	if (!user) {
		throw new Error("User not found");
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password);

	if (!isPasswordMatch) {
		throw new Error("Password is incorrect");
	}

	return user;
};

const User = mongoose.model("User", userSchema);

export default User;
