import OpenToWorkService from "../services";

export const createOpenToWork = async (request, response, next) => {
	await OpenToWorkService.insertOpenToWork(request.params.userId, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const getAllOpenToWorks = async (request, response, next) => {
	await OpenToWorkService.getAllOpenToWorks()
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
	await OpenToWorkService.updateOpenToWork(request.params.id, request.body)
		.then((job) => {
			request.handleResponse.successRespond(response)(job);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const deleteOpenToWorkPermenently = async (request, response, next) => {
	if (request.params.id) {
		await OpenToWorkService.deleteOpenToWorkPermenently(request.params.id)
			.then((openToWork) => {
				request.handleResponse.successRespond(response)(openToWork);
				next();
			})
			.catch((error) => {
				request.handleResponse.errorRespond(response)(JSON.parse(error.message));
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)(JSON.parse("openToWork id is not Passed"));
		next();
	}
};
