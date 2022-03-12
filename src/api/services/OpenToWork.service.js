import OpenToWork from "../models/OpenToWork.model";

export const insertOpenToWork = async (data) => {
	return await OpenToWork.create(data)
		.then(async (createdOpenToWork) => {
			return createdOpenToWork;
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
		.then((openToWork) => {
			return openToWork;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
