// services/Comments.service.ts

class CommentService {
  private CommentRepository: CommentRepository;

  constructor(CommentRepository: CommentRepository) {
    this.CommentRepository = CommentRepository;
  }

  public async getAllComments(): Promise<CommentItem[]> {
    return await this.CommentRepository.getAll();
  }

  public async getCommentById(
    id: number,
  ): Promise<CommentItem | undefined> {
    return await this.CommentRepository.getById(id);
  }

  public async createComment(
    Comment: CommentItem,
  ): Promise<boolean> {
    return await this.CommentRepository.create(Comment);
  }

  public async updateComment(
    id: number,
    question: CommentItem,
  ): Promise<boolean> {
    return await this.CommentRepository.update(id, question);
  }

  public async deleteComment(id: number): Promise<boolean> {
    return await this.CommentRepository.delete(id);
  }
}

export default CommentService;
