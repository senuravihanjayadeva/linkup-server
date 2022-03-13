import OpenToWork from "../models/OpenToWork.model";
import UserModel from "../models/User.model";

export const insertOpenToWork = async (userId, data) => {
	return await OpenToWork.create(data)
		.then(async (createdOpenToWork) => {
			const user = await UserModel.findById(userId);
			if (user) {
				user.openToWorkList.unshift(createdOpenToWork);
				return user
					.save()
					.then(() => {
						return createdOpenToWork;
					})
					.catch((error) => {
						return error;
					});
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const getAllOpenToWorks = async () => {
	return await OpenToWork.find()
		.then((openToWorks) => {
			return openToWorks;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const updateOpenToWork = async (openToWorkId, updateData) => {
	return await OpenToWork.findById(openToWorkId)
		.then(async (openToWorkDetails) => {
			if (openToWorkDetails) {
				if (openToWorkDetails.applicantName) {
					openToWorkDetails.applicantName = updateData.applicantName;
				}
				if (openToWorkDetails.applyingPosition) {
					openToWorkDetails.applyingPosition = updateData.applyingPosition;
				}
				if (openToWorkDetails.description) {
					openToWorkDetails.description = updateData.description;
				}
				return await openToWorkDetails.save();
			} else {
				throw new Error("OpenToWork not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const deleteOpenToWorkPermenently = async (openToWorkId) => {
	return await OpenToWork.findByIdAndDelete(openToWorkId)
		.then(async (openToWork) => {
			const user = await UserModel.findById(userId);
			if (user) {
				await user.openToWorkList.splice(
					user.openToWorkList.findIndex((a) => a._id.toString() === openToWork._id.toString()),
					1
				);

				return await user
					.save()
					.then(() => {
						return openToWork;
					})
					.catch((error) => {
						return error;
					});
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
