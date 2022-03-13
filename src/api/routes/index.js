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
	app.get("/jobs/all", controller.getAllJobs);
	app.put("/jobs/", controller.updateJob);
	app.delete("/jobs/remove/:userId/:jobId", controller.deleteJobPermenently);

	// Applications endpoints
	app.post("/applications/user/:userId", controller.createdApplication);
	app.get("/applications/all", controller.getAllApplications);
	app.put("/applications/", controller.updateApplication);
	app.delete("/applications/remove/:userId/:applicationId", controller.deleteApplicationPermenently);

	// OpenToWork endpoints
	app.post("/opentowork/user/:userId", controller.createOpenToWork);
	app.get("/opentowork/all", controller.getAllOpenToWorks);
	app.put("/opentowork/", controller.updateOpenToWork);
	app.delete("/opentowork/remove/", controller.deleteOpenToWorkPermenently);
}
