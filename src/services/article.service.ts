// services/articles.service.ts

import { ArticleItem } from "@/entities/article.entity";
import { ArticleRepository } from "@/repositories/article.repository";

class ArticleService {
  private ArticleRepository: ArticleRepository;

  constructor(ArticleRepository: ArticleRepository) {
    this.ArticleRepository = ArticleRepository;
  }

  public async getAllArticles(): Promise<ArticleItem[]> {
    return await this.ArticleRepository.getAll();
  }

  public async getArticleById(
    id: number,
  ): Promise<ArticleItem | undefined> {
    return await this.ArticleRepository.getById(id);
  }

  public async createArticle(
    Article: ArticleItem,
  ): Promise<boolean> {
    return await this.ArticleRepository.create(Article);
  }

  public async updateArticle(
    id: number,
    question: ArticleItem,
  ): Promise<boolean> {
    return await this.ArticleRepository.update(id, question);
  }

  public async deleteArticle(id: number): Promise<boolean> {
    return await this.ArticleRepository.delete(id);
  }
}

export default ArticleService;
