import { z } from "zod"

export const UserItemZod = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  roles: z.array(z.string()),
  features: z.object({
    isArticleRatingEnabled: z.boolean(),
    isCounterEnabled: z.boolean(),
    isAppRedesigned: z.boolean()
  }).partial(),
  avatar: z.string(),
  jsonSettings: z.object({
    isArticlesPageWasOpened: z.boolean(),
    theme: z.string().optional()
  }).optional()
})

export type UserItem = z.infer<typeof UserItemZod>;
