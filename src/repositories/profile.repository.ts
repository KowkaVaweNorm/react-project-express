import { Repository } from "@/repositories/repository/Repository";
import { ErrorCodeEnum } from "./consts/ErrorCode";
import { ProfileItem } from "@/entities/profile.entity";

export class ProfileRepository extends Repository<ProfileItem> {
  constructor(profiles?: ProfileItem[]) {
    const list: ProfileItem[] = [
      {
        "id": "1",
        "first": "фыаыфаыф",
        "lastname": "kowka",
        "age": 25,
        "currency": "RUB",
        "country": "Russia",
        "city": "Moscow",
        "username": "admin213",
        "avatar": "https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625"
      },
      {
        "id": "2",
        "first": "kowka vn",
        "lastname": "asf",
        "age": 465,
        "currency": "EUR",
        "country": "Ukraine",
        "city": "Moscow",
        "username": "kowka vn",
        "avatar": "https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg"
      },
      {
        "id": "4",
        "first": "test",
        "lastname": "user",
        "age": 465,
        "currency": "EUR",
        "country": "Ukraine",
        "city": "Moscow",
        "username": "testuser",
        "avatar": "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg"
      }
    ];
    super(profiles ?? list);
  }

  async getAll() {
    try {
      return this.members;  
    } catch (error) {
      return Promise.reject(ErrorCodeEnum.PARSE_TYPE);
    }
  }

  getById(id: number): Promise<ProfileItem | undefined> {
    return new Promise((res, rej) => res(this.members[0]));
  }

  create(User: ProfileItem): Promise<boolean> {
    console.log("create:", User);
    return new Promise((res, rej) => res(true));
  }

  update(id: number, profile: ProfileItem): Promise<boolean> {
    console.log("updated id:", id);
    return new Promise((res, rej) => res(true));
  }

  delete(id: number): Promise<boolean> {
    console.log("deleted:", id);
    return new Promise((res, rej) => res(true));
  }
}
