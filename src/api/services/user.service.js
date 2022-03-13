import UserModel from "../models/User.model";

export const insertUser = async (userData) => {
	return await UserModel.create(userData)
		.then(async (user) => {
			await user.generateAuthToken();
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const authenticateUser = async (userName, password) => {
	try {
		return await UserModel.findByUsernamePassword(userName, password);
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getUsers = async () => {
	return await UserModel.find()
		.populate({
			path: "applicationList",
		})
		.populate({
			path: "jobList",
		})
		.populate({
			path: "openToWorkList",
		})
		.then((users) => {
			return users;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const updateUser = async (userId, updateData) => {
	return await UserModel.findById(userId)
		.then(async (userDetails) => {
			if (userDetails) {
				if (updateData.userName) {
					userDetails.userName = updateData.userName;
				}
				if (updateData.email) {
					userDetails.email = updateData.email;
				}
				return await userDetails.save();
			} else {
				throw new Error("User not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const deleteUserPermenently = async (userId) => {
	return await UserModel.findByIdAndDelete(userId)
		.then((user) => {
			return user;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
