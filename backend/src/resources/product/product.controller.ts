import {Request, Response} from "express";

import {
    createProduct,
    findProductByName,
    getProducts,
    removeProduct,
} from "./product.service";

import { CreateProductDTO } from "./product.types";

import {ReasonPhrases, StatusCodes} from "http-status-codes";

const index = async (req: Request, res: Response) => {
    const products = await getProducts();
    res.json(products);
}

const create = async (req: Request, res: Response) => {
    const productData = req.body as CreateProductDTO;
    try {
        if (await findProductByName(productData.name)) {
            return res.status(StatusCodes.CONFLICT).json({ message: ReasonPhrases.CONFLICT });
        }
        const newProduct = await createProduct(productData);
        res.status(StatusCodes.CREATED).json(newProduct);
    } catch (error){
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });    
    }  
}

const remove = async (req: Request, res: Response) => {
    const productId = Number(req.params.id);
    try {
        await removeProduct(productId);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error){
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });    
    }  
}

const read = (req: Request, res: Response) => {}
const update = (req: Request, res: Response) => {}

export {
    index,
    create,
    read,
    update,
    remove
};