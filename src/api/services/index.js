import {
	insertUser,
	authenticateUser,
	getUsers,
	updateUser,
	deleteUserPermenently,
} from "./User.service";

import {
	insertJob,
	getAllJobs,
	updateJob,
	deleteJobPermenently,
} from "./Jobs.service";

import {
	insertOpenToWork,
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
	updateJob,
	deleteJobPermenently,
	//OpenToWork Service
	insertOpenToWork,
	getAllOpenToWorks,
	updateOpenToWork,
	deleteOpenToWorkPermenently,
};