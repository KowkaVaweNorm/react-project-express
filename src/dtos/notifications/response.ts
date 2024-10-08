import { z } from "zod";

export const NotificationItemZodDto = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  userId: z.string(),
  href: z.string().optional(),
});

export type NotificationItemDto = z.infer<typeof NotificationItemZodDto>;
