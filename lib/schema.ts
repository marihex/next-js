import Joi from "joi";

export type CarFormData = {
    brand: string;
    price: number;
    year: number;
}
export const carSchema = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]')).min(1).max(20).trim().required().messages({
        'string.pattern.base': 'enter correct value',
        'string.min': 'brand name should be at least 1 characters',
        'string.max': 'brand name should be max 20 characters',
        'string.empty': 'brand is required',
        'any.required': 'brand is required'

    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.max': 'price should be max 1000000',
        'number.base': 'price should be a number',
        'any.required': 'price is required'
    }),
    year: Joi.number().min(1990).max(2026).required().messages({
        'number.min': 'year should be min 1996',
        'number.max': 'year should be max 2026',
        'number.base': 'year should be a number',
        'any.required': 'year is required'

    })
})