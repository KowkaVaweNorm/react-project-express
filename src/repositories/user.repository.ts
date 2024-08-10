import { Repository } from "@/repositories/repository/Repository";
import { ErrorCodeEnum } from "./consts/ErrorCode";
import { UserItem } from "@/entities/user.entity";

export class UserRepository extends Repository<UserItem> {
  constructor(users?: UserItem[]) {
    const list: UserItem[] = [
      {
        "id": "1",
        "username": "admin",
        "password": "123",
        "roles": [
          "ADMIN"
        ],
        "features": {
          "isArticleRatingEnabled": true,
          "isCounterEnabled": true,
          "isAppRedesigned": true
        },
        "avatar": "https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625",
        "jsonSettings": {
          "isArticlesPageWasOpened": true,
          "theme": "app_dark_theme"
        }
      },
      {
        "id": "2",
        "username": "user",
        "password": "123",
        "roles": [
          "USER"
        ],
        "features": {
          "isArticleRatingEnabled": false,
          "isCounterEnabled": false,
          "isAppRedesigned": false
        },
        "avatar": "https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg",
        "jsonSettings": {
          "isArticlesPageWasOpened": true,
          "theme": "app_dark_theme"
        }
      },
      {
        "id": "3",
        "username": "manager",
        "password": "123",
        "roles": [
          "MANAGER"
        ],
        "features": {
          "isArticleRatingEnabled": false,
          "isCounterEnabled": true
        },
        "avatar": "https://s1.1zoom.ru/big3/992/367659-alexfas01.jpg",
        "jsonSettings": {
          "isArticlesPageWasOpened": true
        }
      },
      {
        "id": "4",
        "username": "testuser",
        "password": "123",
        "roles": [
          "ADMIN"
        ],
        "features": {
          "isArticleRatingEnabled": true,
          "isCounterEnabled": true
        },
        "avatar": "https://s1.1zoom.ru/big3/992/367659-alexfas01.jpg"
      }
    ];
    super(users ?? list);
  }

  async getAll() {
    try {
      return this.members;  
    } catch (error) {
      return Promise.reject(ErrorCodeEnum.PARSE_TYPE);
    }
  }

  getById(id: number): Promise<UserItem | undefined> {
    return new Promise((res, rej) => res(this.members[0]));
  }

  create(User: UserItem): Promise<boolean> {
    console.log("create:", User);
    return new Promise((res, rej) => res(true));
  }

  update(id: number, User: UserItem): Promise<boolean> {
    console.log("updated id:", id);
    console.log("updated User:", User);
    return new Promise((res, rej) => res(true));
  }

  delete(id: number): Promise<boolean> {
    console.log("deleted:", id);
    return new Promise((res, rej) => res(true));
  }
}
