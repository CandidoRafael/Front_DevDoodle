import { z } from 'zod'

export const schemaSearch = z.object({
    title: z
    .string()
    .min(1, "O campo de pesquisa não pode ser vazio")
    .refine(value => !/^\s*$/.test(value), "O campo não pode ter espaços")
  })