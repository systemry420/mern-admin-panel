import { AppDataSource } from './../index';
import { Request, Response } from "express";
import { Product } from '../entity/product.entity';

function getRepo() {
    return AppDataSource.getRepository(Product)
}

export const GetAllProducts = async (req: Request, res: Response) => {
    const repo = getRepo()

    const products = await repo.find()

    res.send(products)
}

export const CreateProduct = async (req: Request, res: Response) => {
    const repo = getRepo()

    const product = await repo.save(req.body)

    res.send(product)  
}

export const GetProductById = async (req: Request, res: Response) => {
    const repo = getRepo()

    const product = await repo.findOneBy({id: parseInt(req.params.id)})   

    res.status(201).send(product)
}

export const UpdateProduct = async (req: Request, res: Response) => {
    const repo = getRepo()

    const product = await repo.update(req.params.id, {
        ...req.body
    })

    res.status(202).send({
        ...product
    })
}

export const DeleteProduct = async (req: Request, res: Response) => {
    const repo = getRepo()

    await repo.delete(req.params.id)

    res.status(204).send({ body: null }) 
}
