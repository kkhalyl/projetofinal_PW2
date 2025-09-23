import Joi from "joi"

const productSchema = Joi.object(.keys({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(3).max(500).required(),
    price: Joi.number().precision(2).min(0).required(),
    stock: Joi.number().integer().min(0).required()
}))

