import { z } from 'zod'

export const schemaProfile = z.object({
    name: z.string().min(1, 'O campo nome não pode ser vazio'),
    username: z.string().min(1, 'O campo username não pode ser vazio'),
    avatar: z.string().min(1, 'O campo avatar não pode ser vazio'),
    background: z.string().min(1, 'O campo banner não pode ser vazio')
})