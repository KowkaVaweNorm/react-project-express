import { Router } from 'express';
import notificationController from '../controllers/notification.controller';

const router = Router();

router.get('/', (req, res, next) => notificationController.getAll(req, res, next));
// router.get('/:id', (req, res, next) => notificationController.getById(req, res, next));
// router.post('/', (req, res, next) => notificationController.create(req, res, next));
// router.put('/:id', (req, res, next) => notificationController.update(req, res, next));
// router.delete('/:id', (req, res, next) => notificationController.delete(req, res, next));

export default router;