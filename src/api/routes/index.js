import controller from "../controllers";
import middleware from "../middlewares";

export default function (app) {
	// User endpoints
	app.post("/user/", controller.createUser);
	app.post("/user/login/", controller.login);
	app.get("/user/auth/", middleware.authenticate, controller.getAuthUser);
	app.get("/user/all", middleware.authenticate, controller.getAllUsers);
	app.put("/user/", middleware.authenticate, controller.updateUser);
	app.delete("/user/remove/", middleware.authenticate, controller.deleteUserPermenently);

	// Jobs endpoints
	app.post("/jobs/", controller.createJob);
	app.get("/jobs/all", controller.getAllJobs);
	app.put("/jobs/", controller.updateJob);
	app.delete("/jobs/remove/", controller.deleteJobPermenently);

	// Applications endpoints
	app.post("/applications/", controller.createdApplication);
	app.get("/applications/all", controller.getAllApplications);
	app.put("/applications/", controller.updateApplication);
	app.delete("/applications/remove/", controller.deleteApplicationPermenently);

	// OpenToWork endpoints
	app.post("/opentowork/", controller.createOpenToWork);
	app.get("/opentowork/all", controller.getAllOpenToWorks);
	app.put("/opentowork/", controller.updateOpenToWork);
	app.delete("/opentowork/remove/", controller.deleteOpenToWorkPermenently);
}
