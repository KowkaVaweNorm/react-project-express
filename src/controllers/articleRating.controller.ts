// controllers/ArticleRating.controller.ts

import { ArticleRatingRepository } from "@/repositories/articleRating.repository";
import ArticleRatingService from "@/services/articleRating.service";
import { Request, Response, NextFunction } from "express";

const articleRatingService = new ArticleRatingService(
  new ArticleRatingRepository(),
);

class ArticleRatingController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const ArticleRatings = await articleRatingService.getAllArticleRatings();
      res.status(200).json(ArticleRatings);
    } catch (error) {
      next(error);
    }
  }

  // public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const article = await ArticleRatingervice.getarticleById(id);
  //     res.status(200).json(article);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const article: CreatearticleDto = req.body;
  //     const created = await ArticleRatingervice.createarticle(article);
  //     res.status(201).json({ success: created });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const article: CreatearticleDto = req.body;
  //     const updated = await ArticleRatingervice.updatearticle(id, article);
  //     res.status(200).json({ success: updated });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const deleted = await ArticleRatingervice.deletearticle(id);
  //     res.status(204).send();
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default new ArticleRatingController();
