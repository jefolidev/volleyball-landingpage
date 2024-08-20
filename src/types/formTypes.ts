import { z } from 'zod'

const gamesFormSchema = z.object({
  name: z.string().min(3),
  adress: z.string().min(3),
  district: z.string().min(3),
  reference: z.string().min(3),
  days: z.string().array(),
  startHour: z.string(),
  endHour: z.string(),
  tags: z.string().array(),
  dificulty: z.string(),
})

export type GamesFormSchema = z.infer<typeof gamesFormSchema>
