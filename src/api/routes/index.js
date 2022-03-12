import controller from "../controllers";
import middleware from "../middleware";

export default function (app) {
  // User endpoints
  app.post("/user/", controller.createUser);
  app.post("/user/login/", controller.login);
  app.get("/user/auth/", middleware.authenticate, controller.getAuthUser);
  app.get("/user/all", middleware.authenticate, controller.getAllUsers);
  app.put("/user/", middleware.authenticate, controller.updateUser);
  app.delete("/user/remove/", middleware.authenticate, controller.removeUserPermenently);
}