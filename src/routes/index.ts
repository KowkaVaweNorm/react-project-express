import { Express } from "express";
import notificationApi from "./notification";
import articlesApi from "./artciles";

export const setupRoutes = (app: Express) => {
  app.use("/notifications", notificationApi);
  app.use("/articles", articlesApi);
  app.use("/comments", notificationApi);
  app.use("/users", notificationApi);
  app.use("/profile", notificationApi);
  app.use("/article-ratings", notificationApi);
  app.use("/profile-ratings", notificationApi);
};
