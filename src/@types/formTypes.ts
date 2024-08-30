/* eslint-disable prettier/prettier */
import { z } from 'zod'

const gamesFormItemSchema = z
  .object({
    name: z.string().min(3),
    adress: z.string().min(3),
    district: z.string().min(3),
    days: z.array(z.string()),
    startHour: z.string(),
    endHour: z.string(),
    tags: z.array(z.string()),
    dificulty: z.string(),
  })
  .array()

export type GamesFormItem = z.infer<typeof gamesFormItemSchema>
