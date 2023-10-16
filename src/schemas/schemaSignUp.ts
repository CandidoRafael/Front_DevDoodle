import { z } from 'zod'

export const schemaSignUp = z.object({
    name: z
      .string()
      .min(3, 'Nome deve ter no mínimo 3 caracteres')
      .transform((name) => name
      .trim()
      .split(" ")
      .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
      .join(" ")
      )
      ,
    email: z.string().email('Email inválido').toLowerCase(),
    password: z.string().min(1, 'Senha obrigatória')
  })