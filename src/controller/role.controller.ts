import { Role } from './../entity/role.entity';
import { AppDataSource } from './../index';
import { Request, Response } from "express";

export const GetRoles = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(Role)

    const roles = await repo.find()

    res.send(roles)
}

export const GetRole = async (req: Request, res: Response) => {
    const repo = AppDataSource.getRepository(Role)

    const roles = await repo.findOneBy({
        id: +req.params.id
    })

    res.send(roles)
}

