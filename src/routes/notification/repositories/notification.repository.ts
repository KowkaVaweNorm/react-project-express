import { NotificationItemZod } from './../types/domain';
import { Repository } from "@/shared/repository/Repository";
import { NotificationItem } from "../types/domain";

export class NotificationRepository extends Repository<NotificationItem> {
  constructor(notifications?: NotificationItem[]) {
    const list: NotificationItem[] = [
      {
        id: "1",
        title: "Уведомление 1",
        description: "Произошло какое-то событие",
        userId: "1",
      },
      {
        id: "2",
        title: "Уведомление 2",
        description: "Произошло какое-то событие",
        userId: "1",
        href: "http://localhost:3000/admin",
      },
      {
        id: "3",
        title: "Уведомление 3",
        description: "Произошло какое-то событие",
        userId: "1",
        href: "http://localhost:3000/admin",
      },
      {
        id: "4",
        title: "Уведомление 4",
        description: "Произошло какое-то событие",
        userId: "1",
      },
      {
        id: "5",
        title: "Уведомление 1",
        description: "Произошло какое-то событие",
        userId: "2",
      },
    ];
    super(notifications ?? list);
  }

  getAll(): Promise<NotificationItem[]> {
    if(NotificationItemZod.array().parse(this.members)){
      return new Promise((res, rej) => res(this.members));
    }
    return new Promise((res, rej) => rej());
  }

  getById(id: number): Promise<NotificationItem | undefined> {
    return new Promise((res, rej) => res(this.members[0]));
  }

  create(notification: NotificationItem): Promise<boolean> {
    console.log("create:", notification);
    return new Promise((res, rej) => res(true));
  }

  update(id: number, notification: NotificationItem): Promise<boolean> {
    console.log("updated id:", id);
    console.log("updated notification:", notification);
    return new Promise((res, rej) => res(true));
  }

  delete(id: number): Promise<boolean> {
    console.log("deleted:", id);
    return new Promise((res, rej) => res(true));
  }
}
