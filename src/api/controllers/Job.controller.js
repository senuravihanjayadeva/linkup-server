import JobService from "../services";

export const createJob = async (request, response, next) => {
	await JobService.insertJob(request.params.userId, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const getAllJobs = async (request, response, next) => {
	await JobService.getAllJobs()
		.then((jobs) => {
			request.handleResponse.successRespond(response)(jobs);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const updateJob = async (request, response, next) => {
	await JobService.updateUser(request.params.id, request.body)
		.then((job) => {
			request.handleResponse.successRespond(response)(job);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const deleteJobPermenently = async (request, response, next) => {
	if (request.params.userId && request.params.jobId) {
		await JobService.deleteJobPermenently(request.params.userId,request.params.jobId)
			.then((job) => {
				request.handleResponse.successRespond(response)(job);
				next();
			})
			.catch((error) => {
				request.handleResponse.errorRespond(response)(JSON.parse(error.message));
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)(JSON.parse("Job id is not Passed"));
		next();
	}
};
