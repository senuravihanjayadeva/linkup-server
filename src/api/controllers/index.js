import {
	createUser,
	login,
	getAuthUser,
	getAllUsers,
	updateUser,
	deleteUserPermenently,
} from "./User.controller";

import {
	createdApplication,
	getAllApplications,
	updateApplication,
	deleteApplicationPermenently,
} from "./Application.controller";

import {
	createJob,
	getAllJobs,
	updateJob,
	deleteJobPermenently,
} from "./Job.controller";

import {
	createOpenToWork,
	getAllOpenToWorks,
	updateOpenToWork,
	deleteOpenToWorkPermenently,
} from "./OpenToWork.controller";

export default {
	//User Controllers
	createUser,
	login,
	getAuthUser,
	getAllUsers,
	updateUser,
	deleteUserPermenently,
	//Application Controllers
	createdApplication,
	getAllApplications,
	updateApplication,
	deleteApplicationPermenently,
	//Job Controllers
	createJob,
	getAllJobs,
	updateJob,
	deleteJobPermenently,
	//OpenToWork Controllers
	createOpenToWork,
	getAllOpenToWorks,
	updateOpenToWork,
	deleteOpenToWorkPermenently,
};
