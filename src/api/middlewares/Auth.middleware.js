import jwt from "jsonwebtoken";
import logger from "../../util/logger";
import UserModel from "../models/User.model";

export const authenticate = async (request, response, next) => {
	try {
		const secret = process.env.JWT_SECRET;

		if (secret) {
			const authToken = request.header("Authorization");
			const decode = jwt.verify(authToken, secret);
			const user = await UserModel.findOne({
				_id: decode,
				authToken: authToken,
			});

			if (!user) {
				const useNotFoundResponse = JSON.stringify({
					status: 401,
					message: "User not found in the system",
				});
				throw new Error(useNotFoundResponse);
			}

			request.authToken = authToken;
			request.user = user;

			logger.info(`Authentication Token for ID ${user._id} is Accepted`);
			next();
		} else {
			throw new Error("Token Secret is not found");
		}
	} catch (error) {
		logger.warn(error.message);
		return request.handleResponse.unauthorizedRespond(response)(error.message);
	}
};