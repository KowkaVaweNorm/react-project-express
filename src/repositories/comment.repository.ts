import { CommentItem } from "@/entities/comment.entity";
import { Repository } from "@/repositories/repository/Repository";

export class CommentRepository extends Repository<CommentItem> {
  constructor(Comments?: CommentItem[]) {
    const list: CommentItem[] = [
      {
        id: "1",
        text: "Статья топ",
        articleId: "1",
        userId: "1",
      },
      {
        id: "2",
        text: "Кто это сделал??????",
        articleId: "1",
        userId: "1",
      },
      {
        id: "3",
        text: "some comment 3",
        articleId: "1",
        userId: "1",
      },
      {
        articleId: "1",
        userId: "1",
        text: "123",
        id: "4Cljjzl",
      },
      {
        articleId: "1",
        userId: "1",
        text: "123asfasf",
        id: "AEM4Dvc",
      },
      {
        articleId: "1",
        userId: "2",
        text: "123asfasf",
        id: "IFEOWl0",
      },
      {
        articleId: "1",
        userId: "2",
        text: "привет мир",
        id: "dBacYRZ",
      },
      {
        articleId: "1",
        userId: "2",
        text: "хехехехе",
        id: "rBX_C-e",
      },
      {
        articleId: "1",
        userId: "2",
        text: "фыафыа",
        id: "5k0ApX-",
      },
      {
        articleId: "1",
        userId: "2",
        text: "sdfsdfsd",
        id: "w-HDIRq",
      },
      {
        articleId: "1",
        userId: "2",
        text: "asdasdasd",
        id: "MVvGQoZ",
      },
      {
        articleId: "3",
        userId: "1",
        text: "comment 1",
        id: "bAs7YBE",
      },
      {
        articleId: "2",
        userId: "1",
        text: "python!!!",
        id: "p5rMadd",
      },
      {
        articleId: "3",
        userId: "1",
        text: "123213",
        id: "Zu_RNuF",
      },
      {
        articleId: "8",
        userId: "1",
        text: "dfdsf",
        id: "4rFHQgJ",
      },
      {
        articleId: "8",
        userId: "1",
        text: "sdfsdf",
        id: "yYEdTI-",
      },
      {
        articleId: "7",
        userId: "1",
        text: "123213",
        id: "TR1yDY6",
      },
      {
        articleId: "7",
        userId: "1",
        text: "112",
        id: "wSAhqy5",
      },
      {
        articleId: "18",
        userId: "1",
        text: "12",
        id: "r6b1z-N",
      },
      {
        articleId: "18",
        userId: "2",
        text: "привет",
        id: "DENfTu6",
      },
      {
        articleId: "7",
        userId: "2",
        text: "33",
        id: "Ps59wrg",
      },
      {
        articleId: "7",
        userId: "2",
        text: "123",
        id: "zzYVth3",
      },
      {
        articleId: "7",
        userId: "2",
        text: "123",
        id: "WjF4c_d",
      },
      {
        articleId: "1",
        userId: "2",
        text: "privet",
        id: "fta748h",
      },
      {
        articleId: "2",
        userId: "2",
        text: "питон топ",
        id: "ZlmlUrg",
      },
      {
        articleId: "7",
        userId: "1",
        text: "123",
        id: "KmtWJR_",
      },
      {
        articleId: "8",
        userId: "2",
        text: "asdasd",
        id: "eB1A-7c",
      },
      {
        articleId: "2",
        userId: "1",
        text: "class",
        id: "wAZ_hJM",
      },
      {
        articleId: "2",
        userId: "1",
        text: "asfasf",
        id: "SygCNYE",
      },
      {
        articleId: "1",
        userId: "2",
        text: "213",
        id: "bq8YXY2",
      },
      {
        articleId: "1",
        userId: "1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores dolorum eaque eius excepturi expedita     ipsa nam, quos rem rerum voluptas voluptate voluptatem? Dicta distinctio dolore explicabo labore magni sit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores dolorum eaque eius excepturi expedita     ipsa nam, quos rem rerum voluptas voluptate voluptatem? Dicta distinctio dolore explicabo labore magni sit!",
        id: "lTD5sA7",
      },
      {
        articleId: "7",
        userId: "1",
        text: "asd",
        id: "NfX84Yo",
      },
      {
        articleId: "18",
        userId: "1",
        text: "фыафыа",
        id: "Fmg06f6",
      },
      {
        articleId: "1",
        userId: "1",
        text: "Добавляю текст комментария",
        id: "HmqI2nF",
      },
      {
        articleId: "1",
        userId: "1",
        text: "тестирую второй раз комментарии",
        id: "mAW5eR7",
      },
      {
        articleId: "1",
        userId: "1",
        text: "Тестирую третий раз комментарии",
        id: "2NMyhEj",
      },
      {
        articleId: "1",
        userId: "1",
        text: "тестирую четвертый раз комментарии",
        id: "XTAMXxm",
      },
      {
        articleId: "1",
        userId: "1",
        text: "кто это написал?",
        id: "DpyA7O6",
      },
      {
        articleId: "1",
        userId: "1",
        text: "Хорошая статья, но не понятно для кого",
        id: "E_93tx0",
      },
      {
        articleId: "1",
        userId: "1",
        text: "addd",
        id: "O0Vlbwq",
      },
      {
        articleId: "4",
        userId: "1",
        text: "",
        id: "HqEirlO",
      },
      {
        articleId: "4",
        userId: "1",
        text: "",
        id: "Ogv-jgs",
      },
      {
        articleId: "4",
        userId: "1",
        text: "",
        id: "D-aEfJu",
      },
      {
        articleId: "4",
        userId: "1",
        text: "",
        id: "hHRBpHw",
      },
      {
        articleId: "4",
        userId: "1",
        text: "",
        id: "aAAupZZ",
      },
      {
        articleId: "18",
        userId: "1",
        text: "fghfghfgh",
        id: "IcB8da3",
      },
    ];
    super(Comments ?? list);
  }

  getAll(): Promise<CommentItem[]> {
    return new Promise((res, rej) => res(this.members));
  }

  getById(id: number): Promise<CommentItem | undefined> {
    return new Promise((res, rej) => res(this.members[0]));
  }

  create(Comment: CommentItem): Promise<boolean> {
    console.log("create:", Comment);
    return new Promise((res, rej) => res(true));
  }

  update(id: number, Comment: CommentItem): Promise<boolean> {
    console.log("updated id:", id);
    console.log("updated Comment:", Comment);
    return new Promise((res, rej) => res(true));
  }

  delete(id: number): Promise<boolean> {
    console.log("deleted:", id);
    return new Promise((res, rej) => res(true));
  }
}
