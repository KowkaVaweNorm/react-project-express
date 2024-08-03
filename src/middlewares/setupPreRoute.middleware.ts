import express, {type Express} from 'express';
export const setupPreRouteMiddlewares = (app: Express) => {
  // Добавляем JSON парсер
  app.use(express.json());

  // Добавляем другие предварительные middleware
  app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
  });
};