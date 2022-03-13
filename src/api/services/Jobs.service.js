import JobModel from "../models/Jobs.model";
import UserModel from "../models/User.model";

export const insertJob = async (userId, data) => {
	return await JobModel.create(data)
		.then(async (createdJob) => {
			const user = await UserModel.findById(userId);
			if (user) {
				user.jobList.unshift(createdJob);
				return user
					.save()
					.then(() => {
						return createdJob;
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

export const getAllJobs = async () => {
	return await JobModel.find()
		.then((jobs) => {
			return jobs;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const updateJob = async (jobId, updateData) => {
	return await JobModel.findById(jobId)
		.then(async (jobDetails) => {
			if (jobDetails) {
				if (jobDetails.company) {
					jobDetails.company = updateData.company;
				}
				if (jobDetails.position) {
					jobDetails.position = updateData.position;
				}
				if (jobDetails.description) {
					jobDetails.description = updateData.description;
				}
				return await jobDetails.save();
			} else {
				throw new Error("Job not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const deleteJobPermenently = async (userId, jobId) => {
	return await JobModel.findByIdAndDelete(jobId)
		.then(async (job) => {
			const user = await UserModel.findById(userId);
			if (user) {

				await user.jobList.splice( user.jobList.findIndex(a => a._id.toString() === job._id.toString()) , 1);

				return await user
					.save()
					.then(() => {
						return job;
					})
					.catch((error) => {
						return error;
					});
			}
			return job;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
