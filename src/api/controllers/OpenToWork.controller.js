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
		.then((openToWorks) => {
			request.handleResponse.successRespond(response)(openToWorks);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const getOpenToWorkById = async (request, response, next) => {
	await OpenToWorkService.getOpenToWorkById(request.params.openToWorkId)
		.then((openToWork) => {
			request.handleResponse.successRespond(response)(openToWork);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const updateOpenToWork = async (request, response, next) => {
	await OpenToWorkService.updateOpenToWork(request.params.openToWorkId, request.body)
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
	if (request.params.userId && request.params.openToWorkId) {
		await OpenToWorkService.deleteOpenToWorkPermenently(request.params.userId, request.params.openToWorkId)
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
