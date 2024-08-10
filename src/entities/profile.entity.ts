import { z } from "zod"

export const ProfileItemZod = z.object({
  id: z.string(),
  first: z.string(),
  lastname: z.string(),
  age: z.number(),
  currency: z.string(),
  country: z.string(),
  city: z.string(),
  username: z.string(),
  avatar: z.string()
})

export type ProfileItem = z.infer<typeof ProfileItemZod>
