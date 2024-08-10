// services/notifications.service.ts

import { NotificationItem } from "@/entities/notification.entity";
import { NotificationRepository } from "@/repositories/notification.repository";


class NotificationService {
  private notificationRepository: NotificationRepository;

  constructor(notificationRepository: NotificationRepository) {
    this.notificationRepository = notificationRepository;
  }

  public async getAllNotifications(){
    try {
      const result = await this.notificationRepository.getAll();
      return result
    }catch (error) {
      return []
    }
  }

  public async getNotificationById(
    id: number,
  ): Promise<NotificationItem | undefined> {
    return await this.notificationRepository.getById(id);
  }

  public async createNotification(
    notification: NotificationItem,
  ): Promise<boolean> {
    return await this.notificationRepository.create(notification);
  }

  public async updateNotification(
    id: number,
    question: NotificationItem,
  ): Promise<boolean> {
    return await this.notificationRepository.update(id, question);
  }

  public async deleteNotification(id: number): Promise<boolean> {
    return await this.notificationRepository.delete(id);
  }
}

export default NotificationService;
