
import profileController from "@/controllers/profile.controller";
import { Router } from "express";

const router = Router();

router.get("/", profileController.getAll);
// router.get('/:id', (req, res, next) => notificationController.getById(req, res, next));
// router.post('/', (req, res, next) => notificationController.create(req, res, next));
// router.put('/:id', (req, res, next) => notificationController.update(req, res, next));
// router.delete('/:id', (req, res, next) => notificationController.delete(req, res, next));

export default router;
