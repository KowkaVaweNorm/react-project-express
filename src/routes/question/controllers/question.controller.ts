// import express from "express";
// import QuestionService from "../services/question.service";
// import { Question } from "../repositories/question.repository";
// export const router = express.Router();

// const questionRepository = new Question();
// const questionService = new QuestionService(questionRepository);

// router.get("/", (req, res) => {
//   res.send(questionService.getAllQuestions);
// });


// controllers/question.controller.ts
import { Request, Response, NextFunction } from 'express';
import QuestionService from '../services/question.service';
import { Question } from '../repositories/question.repository';

const questionRepository = new Question();
const questionService = new QuestionService(questionRepository);

class QuestionController {
  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const questions = await questionService.getAllQuestions();
      res.status(200).json(questions);
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

export default new QuestionController();
