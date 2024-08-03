import { Router } from 'express';
import QuestionController from '../controllers/question.controller';

const router = Router();

router.get('/', (req, res, next) => QuestionController.getAll(req, res, next));
// router.get('/:id', (req, res, next) => QuestionController.getById(req, res, next));
// router.post('/', (req, res, next) => QuestionController.create(req, res, next));
// router.put('/:id', (req, res, next) => QuestionController.update(req, res, next));
// router.delete('/:id', (req, res, next) => QuestionController.delete(req, res, next));

export default router;