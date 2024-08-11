import { z } from "zod";

export const NotificationItemZod = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  userId: z.string(),
  href: z.string().optional(),
});
