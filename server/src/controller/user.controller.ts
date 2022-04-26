import { User } from './../entity/user.entity';
import { AppDataSource } from './../index';
import { Request, Response } from "express";

export const GetAllUsers = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    const users = await repo.find({
        relations: ['role']
    })

    res.send(users.map(u => {
        const {password, ...user} = u
        return user
    }))
}


export const GetUserByEmail = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    const {password, ...user} = await repo.findOneBy({email: req.body.email})   

    res.status(201).send(user)
}


export const CreateUser = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    const {role_id, ...body} = req.body
    
    const {password, ...user} = await repo.save({
        ...body,
        password: '1234',
        role: {
            id: role_id 
        }
    })

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
    
    await repo.update(req.params.id, {
        ...body,
        role: {
            id: role_id
        }
    })

    res.status(202).send({
        ...body,
        role: {
            id: role_id
        }
    })
}

export const DeleteUser = (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(User)

    repo.delete({id: parseInt(req.params.id)})
        .then(() => {
            console.log('deleted');
            
            res.status(204).send({ body: null }) 
        })

}
