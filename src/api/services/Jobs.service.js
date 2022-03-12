import JobModel from "../models/Jobs.model";

export const insertJob = async (data) => {
	return await JobModel.create(data)
		.then(async (createdJob) => {
			return createdJob;
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

export const deleteJobPermenently = async (jobId) => {
	return await JobModel.findByIdAndDelete(jobId)
		.then((job) => {
			return job;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
