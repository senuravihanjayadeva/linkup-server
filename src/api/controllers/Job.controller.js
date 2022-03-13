import JobService from "../services";
import logger from "../../util/logger";

export const createJob = async (request, response, next) => {
	await JobService.insertJob(request.body)
		.then((data) => {
			logger.info(`New job with ID ${data._id} created`);
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			logger.error(error.message);
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
	if (request.params.id) {
		await JobService.deleteJobPermenently(request.params.id)
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
