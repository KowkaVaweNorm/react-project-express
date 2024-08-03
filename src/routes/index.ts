import { Express } from 'express';
import questionApi from "./question";

export const setupRoutes = (app: Express) => {
  app.use('/question', questionApi);

};