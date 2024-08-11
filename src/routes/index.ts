import { Express } from "express";
import commentsApi from "./comments";
import notificationApi from "./notifications";
import articlesApi from "./artciles";
import usersApi from "./users";
import profilesApi from "./profiles";
import articleRatingsApi from "./article_ratings";

export const setupRoutes = (app: Express) => {
  app.use("/notifications", notificationApi);
  app.use("/articles", articlesApi);
  app.use("/comments", commentsApi);
  app.use("/users", usersApi);
  app.use("/profile", profilesApi);
  app.use("/article-ratings", articleRatingsApi);
  app.use("/profile-ratings", notificationApi);
};
