import {z} from "zod";

export const carSchema = z.object({
    brand: z.string().trim().regex(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]'), 'Invalid Brand name').min(1, 'Should be at least 1 char').max(20, 'Should be max 20 char'),
    price: z.number().min(0).max(1000000, "price should be max 1000000"),
    year: z.number().min(1990, 'year should be min 1996').max(2026, 'year should be max 2026')
})

export type CarFormData = z.infer<typeof carSchema>;