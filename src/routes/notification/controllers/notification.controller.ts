
// controllers/notification.controller.ts
import { Request, Response, NextFunction } from 'express';
import NotificationService from '../services/notification.service';
import { NotificationRepository } from '../repositories/notification.repository';

const notificationService = new NotificationService(new NotificationRepository);

class NotificationController {
  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const notifications = await notificationService.getAllNotifications();
      res.status(200).json(notifications);
    } catch (error) {
      next(error);
    }
  }

  // public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const question = await questionService.getQuestionById(id);
  //     res.status(200).json(question);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const question: CreateQuestionDto = req.body;
  //     const created = await questionService.createQuestion(question);
  //     res.status(201).json({ success: created });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const question: CreateQuestionDto = req.body;
  //     const updated = await questionService.updateQuestion(id, question);
  //     res.status(200).json({ success: updated });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const deleted = await questionService.deleteQuestion(id);
  //     res.status(204).send();
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default new NotificationController();
