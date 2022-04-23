import { User } from './../entity/user.entity';
import { AppDataSource } from './../index';
import { Request, Response } from "express";

export const GetAllUsers = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    const users = await repo.find()

    res.send(users.map(u => {
        const {password, ...user} = u
        return user
    }))
}


export const CreateUser = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    const {role_id, ...body} = req.body
    
    const {password, ...user} = await repo.save(body)

    res.send(user) 
}

export const GetUserById = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    const {password, ...user} = await repo.findOneBy({id: parseInt(req.params.id)})   

    res.status(201).send(user)    
}

export const UpdateUser = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    const {role_id, ...body} = req.body
    
    await repo.update(req.params.id, body)

    res.status(202).send(body)
}

export const DeleteUser = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    await repo.delete(req.params.id)

    res.status(204).send({ body: null }) 
}
