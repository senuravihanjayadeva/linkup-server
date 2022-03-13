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
	getApplicationById,
	getAllApplications,
	updateApplication,
	deleteApplicationPermenently,
} from "./Application.controller";

import {
	createJob,
	getJobById,
	getAllJobs,
	updateJob,
	deleteJobPermenently,
} from "./Job.controller";

import {
	createOpenToWork,
	getOpenToWorkById,
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
	getApplicationById,
	getAllApplications,
	updateApplication,
	deleteApplicationPermenently,
	//Job Controllers
	createJob,
	getJobById,
	getAllJobs,
	updateJob,
	deleteJobPermenently,
	//OpenToWork Controllers
	createOpenToWork,
	getOpenToWorkById,
	getAllOpenToWorks,
	updateOpenToWork,
	deleteOpenToWorkPermenently,
};
