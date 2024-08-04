// controllers/articles.controller.ts
import { ArticleRepository } from "@/repositories/article.repository";
import ArticleService from "@/services/article.service";
import { Request, Response, NextFunction } from "express";

const articleService = new ArticleService(
  new ArticleRepository(),
);

class ArticlesController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const articles = await articleService.getAllArticles();
      res.status(200).json(articles);
    } catch (error) {
      next(error);
    }
  }

  // public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const article = await articleService.getarticleById(id);
  //     res.status(200).json(article);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const article: CreatearticleDto = req.body;
  //     const created = await articleService.createarticle(article);
  //     res.status(201).json({ success: created });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const article: CreatearticleDto = req.body;
  //     const updated = await articleService.updatearticle(id, article);
  //     res.status(200).json({ success: updated });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const deleted = await articleService.deletearticle(id);
  //     res.status(204).send();
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default new ArticlesController();
