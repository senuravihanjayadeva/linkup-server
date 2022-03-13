import UserService from "../services";

export const createUser = async (request, response, next) => {
	const userInfo = {
		userName: request.body.userName,
		password: request.body.password,
		email: request.body.email,
	};

	await UserService.insertUser(userInfo)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const login = async (request, response, next) => {
	const { userName, password } = request.body;

	if (userName && password) {
		await UserService.authenticateUser(userName, password)
			.then(async (user) => {
				const authToken = await user.generateAuthToken();
				const authResponseData = {
					token: authToken,
				};

				request.handleResponse.successRespond(response)(authResponseData);
			})
			.catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};

				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
			});
	} else {
		logger.error("Username or Password is missing");
		request.handleResponse.errorRespond(response)("Username or Password is missing");
		next();
	}
};

export const getAuthUser = async (request, response, next) => {
	const userInfo = {
		_id: request.user._id,
		userName: request.user.userName,
		authToken: request.user.authToken,
	};

	request.handleResponse.successRespond(response)(userInfo);
	next();
};

export const getAllUsers = async (request, response, next) => {
	await UserService.getUsers()
		.then((users) => {
			request.handleResponse.successRespond(response)(users);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const updateUser = async (request, response, next) => {
	await UserService.updateUser(request.user._id, request.body)
		.then((user) => {
			request.handleResponse.successRespond(response)(user);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const deleteUserPermenently = async (request, response, next) => {
	if (request.body.userId) {
		await UserService.deleteUserPermenently(request.body.userId)
			.then((user) => {
				request.handleResponse.successRespond(response)(user);
				next();
			})
			.catch((error) => {
				request.handleResponse.errorRespond(response)(JSON.parse(error.message));
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)(JSON.parse("User id is not Passed"));
		next();
	}
};
