import { type Express, Request, Response, NextFunction } from 'express';

// Middleware для обработки ошибок
const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    result: null,
    errorCode: 500,
    errorText: 'Internal Server Error',
    success: false,
  });
};

// Middleware для отправки ответа в JSON
const responseHandler = (req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next();
  }

  res.json({
    result: res.locals.data || null,
    errorCode: null,
    errorText: null,
    success: true,
  });
};

export const setupPostRouteMiddlewares = (app: Express) => {
  app.use(responseHandler);
  app.use(errorHandler);
};
