import { ArticleRatingItem } from "@/entities/articleRating.entity";
import { Repository } from "@/repositories/repository/Repository";

export class ArticleRatingRepository extends Repository<ArticleRatingItem> {
  constructor(ArticleRatings?: ArticleRatingItem[]) {
    const list: ArticleRatingItem[] = [
      {
        "id": "1",
        "rate": 4,
        "feedback": "Хорошая статья",
        "userId": "1",
        "articleId": "1"
      },
      {
        "userId": "1",
        "articleId": "3",
        "rate": 3,
        "feedback": "",
        "id": "I7ofk1u"
      },
      {
        "userId": "1",
        "articleId": "9",
        "rate": 5,
        "feedback": "asdasdasdasd",
        "id": "Y7MhPzo"
      },
      {
        "userId": "1",
        "articleId": "10",
        "rate": 1,
        "feedback": "отстой",
        "id": "II0a75O"
      },
      {
        "userId": "1",
        "articleId": "7",
        "rate": 3,
        "feedback": "",
        "id": "bcPnbbZ"
      },
      {
        "userId": "2",
        "articleId": "1",
        "rate": 4,
        "feedback": "asdasdasdad",
        "id": "1I3E5gT"
      },
      {
        "userId": "1",
        "articleId": "2",
        "rate": 2,
        "feedback": "asdasdasd",
        "id": "xbwnNBF"
      },
      {
        "userId": "1",
        "articleId": "12",
        "rate": 5,
        "feedback": "фыаыфаыаф",
        "id": "ftXTMSh"
      }
    ];
    super(ArticleRatings ?? list);
  }

  getAll(): Promise<ArticleRatingItem[]> {
    return new Promise((res, rej) => res(this.members));
  }

  getById(id: number): Promise<ArticleRatingItem | undefined> {
    return new Promise((res, rej) => res(this.members[0]));
  }

  create(ArticleRating: ArticleRatingItem): Promise<boolean> {
    console.log("create:", ArticleRating);
    return new Promise((res, rej) => res(true));
  }

  update(id: number, ArticleRating: ArticleRatingItem): Promise<boolean> {
    console.log("updated id:", id);
    console.log("updated ArticleRating:", ArticleRating);
    return new Promise((res, rej) => res(true));
  }

  delete(id: number): Promise<boolean> {
    console.log("deleted:", id);
    return new Promise((res, rej) => res(true));
  }
}
