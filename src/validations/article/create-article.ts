import { z } from "zod"

export const CreateArticleZod = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  img: z.string(),
  views: z.number(),
  createdAt: z.string(),
  userId: z.string(),
  type: z.array(z.string()),
  blocks: z.array(
    z.union([
      z.object({
        id: z.string(),
        type: z.string(),
        title: z.string(),
        paragraphs: z.array(z.string())
      }),
      z.object({ id: z.string(), type: z.string(), code: z.string() }),
      z.object({
        id: z.string(),
        type: z.string(),
        src: z.string(),
        title: z.string()
      })
    ])
  )
})

export type CreateArticleDTO = z.infer<typeof CreateArticleZod>