import { User } from './../entity/user.entity';
import { AppDataSource } from './../index';
import { Request, Response } from "express";
import { verify } from 'jsonwebtoken';


export const AuthMiddleware = async (request: Request, response: Response, next: Function) => {
    try {
        const jwt = request.cookies['jwt']

        const payload: any = verify(jwt, process.env.SECRET_KEY)

        if (!payload) {
            response.status(401).send({
                message: 'Not found'
            })
        }

        request['user'] = await AppDataSource.getRepository(User).findOneBy({
            id: payload.id
        })

        next()

    } catch (error) {
        
    }
}