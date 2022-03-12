import OpenToWorkService from "../services";
import logger from "../../util/logger";

export const createOpenToWork = async (request, response, next) => {
	await OpenToWorkService.insertJob(request.body)
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

export const getAllOpenToWorks = async (request, response, next) => {
	await OpenToWorkService.getAllJobs()
		.then((jobs) => {
			request.handleResponse.successRespond(response)(jobs);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const updateOpenToWork = async (request, response, next) => {
	await OpenToWorkService.updateUser(request.params.id, request.body)
		.then((job) => {
			request.handleResponse.successRespond(response)(job);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const removeOpenToWorkPermenently = async (request, response, next) => {
	if (request.params.id) {
		await OpenToWorkService.deleteUserPermenently(request.params.id)
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
