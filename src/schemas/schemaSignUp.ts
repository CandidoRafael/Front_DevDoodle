import { z } from 'zod'

export const schemaSignUp = z.object({
    name: z.string().min(1, 'Nome obrigatório'),
    email: z.string().email('Email inválido').min(1, 'Email obrigatório'),
    password: z.string().min(1, 'Senha obrigatória')
  })