import controller from "../controllers";
import middleware from "../middlewares";

export default function (app) {
	// User endpoints
	app.post("/user/", controller.createUser);
	app.post("/user/login/", controller.login);
	app.get("/user/auth/", controller.getAuthUser);
	app.get("/user/all", controller.getAllUsers);
	app.put("/user/", controller.updateUser);
	app.delete("/user/remove/", controller.deleteUserPermenently);

	// Jobs endpoints
	app.post("/jobs/user/:userId", controller.createJob);
	app.get("/jobs/:jobId", controller.getJobById);
	app.get("/jobs", controller.getAllJobs);
	app.put("/jobs/edit/:jobId", controller.updateJob);
	app.delete("/jobs/remove/:userId/:jobId", controller.deleteJobPermenently);

	// Applications endpoints
	app.post("/applications/user/:userId", controller.createdApplication);
	app.get("/applications/:applicationId", controller.getApplicationById);
	app.get("/applications", controller.getAllApplications);
	app.put("/applications/edit/:applicationId", controller.updateApplication);
	app.delete("/applications/remove/:userId/:applicationId", controller.deleteApplicationPermenently);

	// OpenToWork endpoints
	app.post("/opentowork/user/:userId", controller.createOpenToWork);
	app.get("/opentowork/:openToWorkId", controller.getOpenToWorkById);
	app.get("/opentowork", controller.getAllOpenToWorks);
	app.put("/opentowork/edit/:openToWorkId", controller.updateOpenToWork);
	app.delete("/opentowork/remove/:userId/:openToWorkId", controller.deleteOpenToWorkPermenently);
}
