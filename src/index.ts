import express from "express";
import dotenv from "dotenv";
import { setupPreRouteMiddlewares } from "./middlewares/setupPreRoute.middleware";
import { setupPostRouteMiddlewares } from "./middlewares/setupPostRoute.middleware";
import { setupRoutes } from "./routes";

export const app = express();

// Загрузка переменных окружения из .env файла
dotenv.config();
const port = process.env["PORT"] || 8000;

// Использование предварительных middleware
setupPreRouteMiddlewares(app);

setupRoutes(app)

app.get("/", (req, res) => {
  res.send("Ping!");
});

// Использование постобработочных middleware
setupPostRouteMiddlewares(app);


app.listen(port, () => {
  console.log('Example app listening');
  console.log(`http://localhost:${port}`);
});
