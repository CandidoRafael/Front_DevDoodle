import { z } from 'zod'

export const schemaSignIn =  z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(1, 'Senha obrigatória')
  })