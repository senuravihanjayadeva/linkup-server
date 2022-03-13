import ApplicationModel from "../services";

export const createdApplication = async (request, response, next) => {
	await ApplicationModel.insertApplication(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const getAllApplications = async (request, response, next) => {
	await ApplicationModel.getAllApplications()
		.then((applications) => {
			request.handleResponse.successRespond(response)(applications);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const updateApplication = async (request, response, next) => {
	await ApplicationModel.updateApplication(request.params.id, request.body)
		.then((application) => {
			request.handleResponse.successRespond(response)(application);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const deleteApplicationPermenently = async (request, response, next) => {
	if (request.params.id) {
		await ApplicationModel.deleteApplicationPermenently(request.params.id)
			.then((application) => {
				request.handleResponse.successRespond(response)(application);
				next();
			})
			.catch((error) => {
				request.handleResponse.errorRespond(response)(JSON.parse(error.message));
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)(JSON.parse("Application id is not Passed"));
		next();
	}
};
