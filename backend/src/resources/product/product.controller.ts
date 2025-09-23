import {Request, Response} from "express"

import {
    createProduct,
    findProductByName,
    getProducts,
    removeProduct,
} from "./product.service"

import { CreateProductDTO } from "./product.types"

import {ReasonPhrases, StatusCode} from ""