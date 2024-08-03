import { z } from "zod";

export const NotificationZod = z.object({
  id: z.string(),
  title: z.string(),
  desription: z.string().nullable(),
  userId: z.string(),
  href: z.string().optional()
})

export type NotificationType = z.infer<typeof NotificationZod>;
