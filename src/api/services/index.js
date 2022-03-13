import {
	insertUser,
	authenticateUser,
	getUsers,
	updateUser,
	deleteUserPermenently,
} from "./User.service";

import {
	insertJob,
	getJobById,
	getAllJobs,
	updateJob,
	deleteJobPermenently,
} from "./Jobs.service";

import {
	insertApplication,
	getApplicationById,
	getAllApplications,
	updateApplication,
	deleteApplicationPermenently,
} from "./Application.service";

import {
	insertOpenToWork,
	getOpenToWorkById,
	getAllOpenToWorks,
	updateOpenToWork,
	deleteOpenToWorkPermenently,
} from "./OpenToWork.service";

export default {
	// User Services
	insertUser,
	authenticateUser,
	getUsers,
	updateUser,
	deleteUserPermenently,
	//Job Service
	insertJob,
	getAllJobs,
	getJobById,
	updateJob,
	deleteJobPermenently,
	//OpenToWork Service
	insertOpenToWork,
	getOpenToWorkById,
	getAllOpenToWorks,
	updateOpenToWork,
	deleteOpenToWorkPermenently,
	//Application Service
	insertApplication,
	getApplicationById,
	getAllApplications,
	updateApplication,
	deleteApplicationPermenently,
};