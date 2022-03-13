import jwt from "jsonwebtoken";
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

			next();
		} else {
			throw new Error("Token Secret is not found");
		}
	} catch (error) {
		return request.handleResponse.unauthorizedRespond(response)(error.message);
	}
};