// services/ArticleRatings.service.ts

import { ArticleRatingItem } from "@/entities/articleRating.entity";
import { ArticleRatingRepository } from "@/repositories/articleRating.repository";


class ArticleRatingService {
  private articleRatingRepository: ArticleRatingRepository;

  constructor(ArticleRatingRepository: ArticleRatingRepository) {
    this.articleRatingRepository = ArticleRatingRepository;
  }

  public async getAllArticleRatings(): Promise<ArticleRatingItem[]> {
    return await this.articleRatingRepository.getAll();
  }

  public async getArticleRatingById(
    id: number,
  ): Promise<ArticleRatingItem | undefined> {
    return await this.articleRatingRepository.getById(id);
  }

  public async createArticleRating(
    ArticleRating: ArticleRatingItem,
  ): Promise<boolean> {
    return await this.articleRatingRepository.create(ArticleRating);
  }

  public async updateArticleRating(
    id: number,
    question: ArticleRatingItem,
  ): Promise<boolean> {
    return await this.articleRatingRepository.update(id, question);
  }

  public async deleteArticleRating(id: number): Promise<boolean> {
    return await this.articleRatingRepository.delete(id);
  }
}

export default ArticleRatingService;
