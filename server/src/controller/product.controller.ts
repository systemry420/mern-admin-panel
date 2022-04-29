import { AppDataSource } from './../index';
import { Request, Response } from "express";
import { Product } from '../entity/product.entity';
import multer from 'multer'
import {extname} from 'path'

function getRepo() {
    return AppDataSource.getRepository(Product)
}

export const GetAllProducts = async (req: Request, res: Response) => {
    const repo = getRepo()

    const take = 10;
    const page = parseInt(req.query.page as string || '1')


    const [data, total] = await repo.findAndCount({
        take,
        skip: (page -  1) * take
    })

    res.send({
        data,
        meta: {
            total, page,
            last_page: Math.ceil(total / take)
        }
    })
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

export const UploadImage = (req, res) => {
    const storage = multer.diskStorage({
        destination: './uploads',
        filename(_, file, callback) {
            const name = Math.random().toString(20).substr(2,12)
            return callback(null, `${name}${extname(file.originalname)}`)
        }
    })

    const upload = multer({storage}).single('image')

    upload(req, res, (err) => {
        res.send({
            url: `http://localhost:8000/api/uploads/${req.file.filename}`
        })
    })

}