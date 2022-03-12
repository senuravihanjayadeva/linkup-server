import ApplicationModel from "../models/Applications.model";

export const insertApplication = async (data) => {
	return await ApplicationModel.create(data)
		.then(async (createdApplication) => {
			return createdApplication;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const getAllApplications = async () => {
	return await ApplicationModel.find()
		.then((applications) => {
			return applications;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const updateApplication = async (applicationId, updateData) => {
	return await ApplicationModel.findById(applicationId)
		.then(async (applicationDetails) => {
			if (applicationDetails) {
				if (applicationDetails.applicantName) {
					applicationDetails.applicantName = updateData.applicantName;
				}
				if (applicationDetails.nic) {
					applicationDetails.nic = updateData.nic;
				}
				if (applicationDetails.contactNumber) {
					applicationDetails.contactNumber = updateData.contactNumber;
				}
				if (applicationDetails.university) {
					applicationDetails.university = updateData.university;
				}
				if (applicationDetails.skills) {
					applicationDetails.skills = updateData.skills;
				}
				if (applicationDetails.languages) {
					applicationDetails.languages = updateData.languages;
				}
				if (applicationDetails.linkedIn) {
					applicationDetails.linkedIn = updateData.linkedIn;
				}
				if (applicationDetails.github) {
					applicationDetails.github = updateData.github;
				}
				if (applicationDetails.status) {
					applicationDetails.status = updateData.status;
				}
				return await applicationDetails.save();
			} else {
				throw new Error("Job not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const deleteApplicationPermenently = async (applicationId) => {
	return await ApplicationModel.findByIdAndDelete(applicationId)
		.then((application) => {
			return application;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
