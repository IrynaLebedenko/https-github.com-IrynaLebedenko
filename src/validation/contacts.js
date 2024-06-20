import Joi from 'joi';

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base': 'Name should be a string',
        'string.min': `Name should have at least ${3} characters`,
        'string.max': `Name should have at most ${20} characters`,
        'any.required': 'Name is required',
    }),
    phoneNumber: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    isFavourite: Joi.boolean().default(false),
    contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal').required().default('personal'),
   
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    phoneNumber: Joi.string().min(3).max(20),
    email: Joi.string().email().optional(),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal'),
});