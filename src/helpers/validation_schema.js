import Joi from 'joi';

export const signupSchema = Joi.object({
    
    username: Joi.string()
            .min(3),
    
    password: Joi.string()
            .min(8)
            .required(),

    email: Joi.string()
            .email()
            .lowercase()
            .required(), 

})

export const loginSchema = Joi.object({
    
    email: Joi.string()
        .email()
        .lowercase()
        .required(),

    password: Joi.string()
            .min(8)
            .required()
})


export const postSchema = Joi.object({
    title: Joi.string()
        .required()
        .min(8),

    body: Joi.string()
        .required()
        .min(8),
    
    author: Joi.string()
})