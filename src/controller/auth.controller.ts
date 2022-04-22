import { AppDataSource } from './../index';
import { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { RegisterValidation } from '../validation/register.validation';
import { sign } from 'jsonwebtoken';

export const Register = async (request: Request, response: Response) => {

    if (request.body.password !== request.body.password_confirm) {
        response.status(400).send({
            message: "Passwords dont match"
        })
    }

    const user = new User() 
    user.first_name = request.body.first_name
    user.last_name = request.body.last_name
    user.email = request.body.email
    user.password = request.body.password

    const { error } = RegisterValidation.validate(request.body)

    if (error) {
        response.status(400).send(error.details)
    }


    // const repo = AppDataSource.getRepository(User)
    // await repo.save(user)

    await AppDataSource.manager.save(user)
    .then(() => {
        console.log('saved');
        response.status(200).send(user)
    })
}

export const Login = async (request: Request, response: Response) => {
    const user = await AppDataSource.getRepository(User).findOneBy({
        email: request.body.email
    })

    if (!user || user.password != request.body.password) {
        response.status(404).send({
            message: 'Invalid credentials'
        })
    }

    const token = sign({
        id: user.id
    }, "secret")

    response.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    })

    response.status(200).send({
        message: 'success'
    })
}