import { AppDataSource } from './../index';
import { Request, Response } from "express";
import { User } from "../entity/user.entity";

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

    // const { error } = RegisterValidation.validate(body)

    // if (error) {
    //     response.status(400).send(error.details)
    // }


    // const repo = AppDataSource.getRepository(User)
    // await repo.save(user)

    await AppDataSource.manager.save(user)
    .then(() => {
        console.log('saved');
        response.status(200).send(user)
    })


}