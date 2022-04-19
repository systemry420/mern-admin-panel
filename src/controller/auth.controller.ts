import { Request, Response } from "express";
import { RegisterValidation } from "../validation/register.validation";

export const Register = (request: Request, response: Response) => {
    const body = request.body;

    const { error } = RegisterValidation.validate(body)

    if (error) {
        response.status(400).send(error.details)
    }
    
    response.send(body)
}